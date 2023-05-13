const mongoose = require("mongoose");
require('dotenv').config();

async function dbConnect() {

      mongoose
    .connect(
        "mongodb://localhost:27017",
    )
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });
}

module.exports = dbConnect;
