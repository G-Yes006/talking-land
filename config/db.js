const mongoose = require("mongoose");
const chalk = require("chalk");

const connectDB = async () => {
  try {
    const DB_URI = process.env.DB_URI;
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(chalk.bgGreen("MongoDB connected successfully."));
  } catch (error) {
    console.error(chalk.red("MongoDB connection error:", error));
  }
};

module.exports = connectDB;
