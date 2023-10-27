const Population = require("../models/populationModel");

// Controller for population
exports.calculatePopulation = async (req, res) => {
  try {
    const { geometry, radius } = req.body;
    const populationData = await Population.aggregate([
      {
        $match: {
          location: {
            $geoWithin: {
              $centerSphere: [
                [geometry.coordinates[0], geometry.coordinates[1]],
                radius / 6371,
              ],
            },
          },
        },
      },
      {
        $group: {
          _id: null,
          totalPopulation: { $sum: "$population" },
        },
      },
    ]);

    if (populationData.length > 0) {
      res.json({ totalPopulation: populationData[0].totalPopulation });
    } else {
      res.json({ totalPopulation: 0 });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.insertPopulationData = async (req, res) => {
  try {
    const data = req.body;

    const insertedData = await Population.create(data);

    res.json({
      message: "Population data inserted successfully",
      data: insertedData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
