const express = require("express");
const Enrichment = require("../models/enrichment.js");
const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const detectXSS = require("../middleware/detectXSS");

const userRouter = express.Router();

userRouter.post("/register", detectXSS, async (req, res) => {
	const preexistingUser = await User.findOne({ username: req.body.username });
	if (preexistingUser) {
		return res
			.status(400)
			.send({ error: "Account with username already exists." });
	}
	let user = new User({
		username: req.body.username,
		password: await bcrypt.hash(req.body.password, 8),
	});
	const token = await user.generateAuthToken();
	req.session.token = token;
	try {
		await user.save();
	} catch (error) {
		console.log(error);
		return res.status(400).send({ error: "An unknown error occurred." });
	}
	return res.status(200).send();
});

userRouter.post("/login", detectXSS, async (req, res) => {
	const preexistingUser = await User.findOne({ username: req.body.username });
	if (!preexistingUser) {
		return res
			.status(400)
			.send({ error: "Username or password is incorrect." });
	}
	const passwordsMatch = await bcrypt.compare(
		req.body.password,
		preexistingUser.password
	);
	if (!passwordsMatch) {
		return res
			.status(400)
			.send({ error: "Username or password is incorrect." });
	}
	let date = new Date();
	let cookieExpiryDate = new Date(
		date.getFullYear() + 1,
		date.getMonth(),
		date.getDay()
	);
	req.session.cookie.expires = cookieExpiryDate;
	const token = await preexistingUser.generateAuthToken();
	req.session.token = token;
	await req.session.save();
	return res.status(200).send({});
});

userRouter.post("/retrieve", async (req, res) => {
	const token = req.session.token;
	if (!token) {
		return res.status(400).send({ error: "Not authenticated." });
	}
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	const user = await User.findOne({ _id: decoded, token });
	if (!user) {
		return res.status(400).send({ error: "Not authenticated." });
	}
	return res.status(200).send({ user: req.session.user });
});

userRouter.post("/logout", async (req, res) => {
	req.session = null; // Deletes the cookie.
	return res.status(200).send({});
});

// Must provide: enrichmentName, date
userRouter.patch("/register-enrichment", auth, async (req, res) => {
	try {
		let enrichment = await Enrichment.findOne({
			name: req.body.enrichmentName,
		});
		if (!enrichment) {
			throw new Error("No enrichment found!");
		}
		if (!req.body.date) {
			throw new Error("No date provided!");
		}
		req.session.user.enrichments.push({
			enrichmentId: enrichment._id,
			date: req.body.date,
		});
		await req.session.user.save();
		return res.status(200).send({ user: req.user });
	} catch (err) {
		console.log(err);
		return res.status(400).send({ enrichments: null });
	}
});

userRouter.get("/get-enrichments", auth, async (req, res) => {
	try {
		let populatedUser = await req.user.populate("enrichments.enrichmentId");
		console.log(populatedUser.enrichments);
		return res.status(200).send({ enrichments: populatedUser.enrichments });
	} catch (err) {
		console.log(err);
		return res.status(400).send({ enrichments: null });
	}
});

module.exports = userRouter;
