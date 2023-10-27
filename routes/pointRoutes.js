const express = require("express");
const router = express.Router();
const pointController = require("../controllers/pointController");

//point routes
router.post("/points", pointController.createPoint);
router.get("/points", pointController.getAllPoints);
router.put('/points/:id', pointController.updatePoint);

module.exports = router;
