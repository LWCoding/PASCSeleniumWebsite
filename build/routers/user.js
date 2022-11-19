const express = require("express");
const Enrichment = require("../models/enrichment.js");
const User = require("../models/user.js");

const userRouter = express.Router();

userRouter.patch("/register-enrichment", async (req, res) => {
    try {
        let enrichment = await Enrichment.findOne(req.query);
        if (!enrichment) {
            throw new Error();
        }
        return res.status(200).send();
    } catch (err) {
        console.log(err);
        return res.status(400).send({enrichments: null});
    }
})

module.exports = enrichmentRouter;