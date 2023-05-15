const express = require('express');

const {
      getAllRoutes,
      getRoute
} = require('../controllers/routesController');

const router = express.Router();

// GET all trips
router.get('/', getAllRoutes);

// GET a single trip
router.get('/:id', getRoute);

module.exports = router;
