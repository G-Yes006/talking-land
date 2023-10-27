const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const pointRoutes = require("./routes/pointRoutes");
const polygonRoutes = require("./routes/polygonRoutes");
const populationRoutes = require("./routes/populationRoutes")
const chalk = require("chalk");
const morgan = require("morgan");

const connectDB = require("./config/db");

dotenv.config();

//DB Coonection
connectDB();

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());

//API endpoints
app.use("/api/v1", pointRoutes);
app.use("/api/v1", polygonRoutes);
app.use("/api/v1", populationRoutes)

//error handling
app.use((err, req, res, next) => {
  console.error(chalk.red(err));
  res.status(500).json({ error: "Internal Server Error" });
});

module.exports = app;
