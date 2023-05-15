const Routes = require('../models/routesModel');
const mongoose = require('mongoose');

// get all trips
const getAllRoutes = async (req, res) => {
      const trips = await Routes.find({}).sort({agency_key: -1})
      res.status(200).json({routes});
}

// get a single trip
getRoute = async (req, res) => {
      const { id } = req.params;

      if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No route with id: ${id}`);
      } 
      const route = await Route.findById(id);

      if(!route) {
            return res.status(404).send(`No route with id: ${id}`);
      }

      res.status(200).json({route});
}

module.exports = { getAllRoutes, getRoute };