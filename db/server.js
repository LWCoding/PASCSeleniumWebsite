const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");
const MongoStore = require("connect-mongo");

// Connect to Mongo database
mongoose.connect(process.env.DATABASE_URL).then(() => {
	console.log("Database connected!");
});

// Create app
const app = express();
app.use(
	cors({
		credentials: true,
		origin: "http://localhost:3001",
	})
);
app.use(express.json());

app.use(express.static(path.join(__dirname, "/")));

// Create express-session for cookies
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: true,
		saveUninitialized: true,
		store: MongoStore.create({
			db: session,
			mongoUrl: process.env.DATABASE_URL,
		}),
		cookie: {
			httpOnly: true,
			secure: false,
			sameSite: "lax",
		},
	})
);

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
