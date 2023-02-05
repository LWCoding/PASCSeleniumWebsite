const mongoose = require("mongoose");
const User = require("../models/user.js");
const bcrypt = require("bcrypt");

const verifyLogin = async (req, res, next) => {
	try {
		if (!req.body.user) {
			throw new Error();
		}
		const user = await User.findOne({ username: req.body.user.username });
		if (!user) {
			throw new Error();
		}
		const result = await bcrypt.compare(
			req.body.user.password,
			user.password
		);
		if (!result) {
			throw new Error();
		}
		req.user = user;
		next();
	} catch (error) {
		return res.status(401).json({ message: "Unauthorized, please log in" });
	}
};

module.exports = verifyLogin;
