const mongoose = require("mongoose");

const enrichmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: "No description provided"
    },
    roomName: {
        type: String,
        required: true
    },
    hostName: {
        type: String,
        required: true
    },
    repeats: {
        type: Boolean,
        required: true
    },
    singleDay: {
        type: Date
    },
    repeatDays: [{
        day: {
            type: String
        }
    }]
})

enrichmentSchema.methods.toJSON = function() {
    const enrichment = this.toObject();
    delete enrichment.__v;
    delete enrichment._id;
    return enrichment;
} 

const enrichmentModel = mongoose.model("Enrichment", enrichmentSchema);

module.exports = enrichmentModel;