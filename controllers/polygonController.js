const Polygon = require("../models/Polygon");

// Controller for polygons
exports.createPolygon = async (req, res) => {
  try {
    const polygon = new Polygon(req.body);
    await polygon.save();
    res.json(polygon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllPolygons = async (req, res) => {
  const polygons = await Polygon.find();
  res.json(polygons);
};

// Update a polygon by ID
exports.updatePolygon = async (req, res) => {
  try {
    const updatedPolygon = await Polygon.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPolygon) {
      return res.status(404).json({ error: "Polygon not found" });
    }
    res.json(updatedPolygon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
