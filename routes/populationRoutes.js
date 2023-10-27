const express = require("express");
const router = express.Router();
const populationController = require("../controllers/populationController");

// Calculate population within a specified area
router.post("/calculatePopulation", populationController.calculatePopulation);
router.post('/insertPopulationData', populationController.insertPopulationData);

module.exports = router;
