const express = require("express");
const Enrichment = require("../models/enrichment.js");
const User = require("../models/user.js");
const bcrypt = require("bcrypt");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
	try {
		const hash = await bcrypt.hash(req.body.password, 10);
		const user = new User({ username: req.body.username, password: hash });
		await user.save();
		res.status(201).json({ message: "User created" });
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: err });
	}
});

userRouter.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ username: req.body.username }).exec();
		if (!user) {
			return res.status(401).json({ message: "Auth failed" });
		}
		const result = await bcrypt.compare(req.body.password, user.password);
		if (result) {
			return res.status(200).json({ message: "Auth successful" });
		}
		return res.status(401).json({ message: "Auth failed" });
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: err });
	}
});

userRouter.patch("/register-enrichment", async (req, res) => {
	try {
		let enrichment = await Enrichment.findOne(req.query);
		if (!enrichment) {
			throw new Error();
		}
		return res.status(200).send();
	} catch (err) {
		console.log(err);
		return res.status(400).send({ enrichments: null });
	}
});

module.exports = userRouter;
