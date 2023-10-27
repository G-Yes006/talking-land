const Point = require("../models/Point");

// Controller for points
exports.createPoint = async (req, res) => {
  try {
    const point = new Point(req.body);
    await point.save();
    res.json(point);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllPoints = async (req, res) => {
  const points = await Point.find();
  res.json(points);
};

// Update a point by ID
exports.updatePoint = async (req, res) => {
  try {
    const pointId = req.params.id;
    const updateData = req.body;
    const updatedPoint = await Point.findByIdAndUpdate(pointId, updateData, {
      new: true,
    });

    if (!updatedPoint) {
      return res.status(404).json({ error: "Point not found" });
    }

    res.json(updatedPoint);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
