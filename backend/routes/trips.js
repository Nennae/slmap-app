const express = require('express');

const {
      getAllTrips,
      getTrip
} = require('../controllers/tripsController');

const router = express.Router();

// GET all trips
router.get('/', getAllTrips);

// GET a single trip
router.get('/:id', getTrip);

module.exports = router;
