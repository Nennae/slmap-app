const mongoose = require("mongoose");
require('dotenv').config();

async function dbConnect() {

      mongoose
    .connect(
        "mongodb://localhost:27017",
    )
    .then(() => {
      console.log("Successfully connected to MongoDB!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB!");
      console.error(error);
    });
}

module.exports = dbConnect;

