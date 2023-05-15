const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tripsSchema = new Schema({
      created_at: {
            type: Date,
            default: Date.now,
            required: true
          },
          agency_key: {
            type: String,
            required: true,
            index: true
          },
          route_id: {
            type: String,
            required: true,
            index: true
          },
          service_id: {
            type: String,
            required: true,
            index: true
          },
          trip_id: {
            type: String,
            required: true,
            index: true
          },
          trip_headsign: String,
          trip_short_name: String,
          direction_id: {
            type: Number,
            index: true,
            min: 0,
            max: 1
          },
}, 
{
  // Points to the collection in the database
  collection: 'trips'
}
);

module.exports = mongoose.model('Trips', tripsSchema);