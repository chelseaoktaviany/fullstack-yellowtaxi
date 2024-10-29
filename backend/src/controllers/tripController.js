const { Trips } = require("../models");

exports.getAllTrip = async (req, res) => {
  try {
    const trips = await Trips.findAll();
    res.status(200).json({
      isSuccess: true,
      data: trips,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      isSuccess: false,
      msg: "Failed to get all trips' data",
    });
  }
};

exports.getTrip = async (req, res) => {
  try {
    const { id } = req.params;

    const trip = await Trips.findByPk(id);

    if (trip) {
      res.status(200).json({
        isSuccess: true,
        data: result,
      });
    } else {
      res.status(404).json({
        isSuccess: false,
        msg: "Trip not found",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      isSuccess: false,
      msg: "Failed to get a trip data",
    });
  }
};
