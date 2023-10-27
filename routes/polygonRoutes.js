const express = require("express");
const router = express.Router();
const polygonController = require("../controllers/polygonController");

//polygon routes
router.post("/polygons", polygonController.createPolygon);
router.get("/polygons", polygonController.getAllPolygons);
router.put("/polygons/:id", polygonController.updatePolygon);

module.exports = router;
