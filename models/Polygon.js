const mongoose = require("mongoose");

const polygonSchema = new mongoose.Schema({
  name: String,
  geometry: {
    type: { type: String, default: "Polygon" },
    coordinates: [[[Number]]],
  },
});

polygonSchema.index({ geometry: "2dsphere" });

module.exports = mongoose.model("Polygon", polygonSchema);
