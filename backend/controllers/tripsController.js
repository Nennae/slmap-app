const Trips = require('../models/tripsModel');
const mongoose = require('mongoose');

// get all trips
const getAllTrips = async (req, res) => {
      const trips = await Trips.find({}).sort({agency_key: -1})
      res.status(200).json({trips});
}

// get a single trip
getTrip = async (req, res) => {
      const { id } = req.params;

      if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No trip with id: ${id}`);
      } 
      const trip = await Trips.findById(id);

      if(!trip) {
            return res.status(404).send(`No trip with id: ${id}`);
      }

      res.status(200).json({trip});
      console.log(`Here is a single trip: ${trip}`);
}

module.exports = { getAllTrips, getTrip };