const express = require("express");
const Enrichment = require("../models/enrichment.js");

const enrichmentRouter = express.Router();

enrichmentRouter.get("/get-all-enrichments", async (req, res) => {
    try {
        let enrichments = await Enrichment.find(req.query);
        if (enrichments) {
            return res.send({enrichments});
        }
        throw new Error();
    } catch (err) {
        console.log(err);
        return res.status(400).send({enrichments: null});
    }
})

enrichmentRouter.get("/find-enrichment", async (req, res) => {
    try {
        let enrichment = await Enrichment.findOne(req.query);
        if (enrichment) {
            return res.send({enrichment});
        }
        throw new Error();
    } catch (err) {
        console.log(err);
        return res.status(400).send({enrichment: null});
    }
})

enrichmentRouter.post("/create-enrichment", async (req, res) => {
    try {
        let enrichment = new Enrichment(req.body);
        await enrichment.save();
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
})

module.exports = enrichmentRouter;