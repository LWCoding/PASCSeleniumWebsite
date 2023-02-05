const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	enrichments: [
		{
			enrichmentId: {
				type: mongoose.Schema.Types.ObjectID,
				ref: "Enrichment",
				required: true,
			},
			date: {
				type: Date,
				required: true,
			},
		},
	],
});

userSchema.methods.toJSON = function () {
	const user = this.toObject();
	delete user.__v;
	delete user._id;
	return user;
};

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
