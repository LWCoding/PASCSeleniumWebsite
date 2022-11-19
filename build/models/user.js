const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    enrichments: [{
        enrichmentId: {
            type: String,
            required: true
        }
    }]
})

userSchema.methods.toJSON = function() {
    const user = this.toObject();
    delete user.__v;
    delete user._id;
    return user;
} 

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;