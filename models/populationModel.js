const mongoose = require("mongoose");

const populationSchema = new mongoose.Schema({
  location: {
    type: { type: String, default: "Point" },
    coordinates: [Number], // [longitude, latitude]
  },
  population: Number,
});

populationSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Population", populationSchema);
