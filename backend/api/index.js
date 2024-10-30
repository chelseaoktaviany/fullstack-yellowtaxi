const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

const axios = require("axios");

const tripRouter = require("../src/routers/tripRouter");

dotenv.config({ path: ".env" });

const app = express();

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use(cors());

app.use(morgan("dev"));

const port = process.env.PORT || 5000;

app.use("/api/trips", tripRouter);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Yellow Taxi Trip API");
  res.status(200).json({ isSuccess: true, msg: "Test" });
});

app.listen(port, () => {
  console.log(`The server is listening on ${port}`);
});
