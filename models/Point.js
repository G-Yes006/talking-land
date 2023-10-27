const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
  name: String,
  location: {
    type: { type: String, default: "Point" },
    coordinates: [Number], // [longitude, latitude]
  },
});

pointSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Point", pointSchema);
