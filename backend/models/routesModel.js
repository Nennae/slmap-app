const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const routesSchema = new Schema({
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
  agency_id: String,
  route_short_name: String,
  route_long_name: String,
  route_desc: String,
  route_type: {
    type: Number,
    required: true,
    min: 0,
    max: 7
  },
  route_url: String,
  route_color: String,
  route_text_color: String
},
{
  // Points to the collection in the database
  collection: 'routes'
  
});

module.exports = mongoose.model('Routes', routesSchema);