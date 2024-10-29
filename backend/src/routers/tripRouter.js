const express = require("express");

const tripController = require("../controllers/tripController");

const router = express.Router();

router.route("/").get(tripController.getAllTrip);
router.route("/:vendor_id").get(tripController.getTrip);

module.exports = router;
