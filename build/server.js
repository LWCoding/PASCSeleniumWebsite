const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

// Connect to Mongo database
mongoose.connect(process.env.DATABASE_URL).then(() => {
	console.log("Database connected!");
});

// Create app
const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "/")));

// Connect routers
const enrichmentRouter = require("./routers/enrichments.js");
app.use(enrichmentRouter);
const userRouter = require("./routers/user.js");
app.use(userRouter);

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "./index.html"));
});

// Locate port and connect to app
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`App running on port ${port}.`);
});
