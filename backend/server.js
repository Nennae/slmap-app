require("dotenv").config();

const express = require("express"); 
const mongoose = require("mongoose");

const routesRoutes = require("./models/routesModel");
const tripsRoutes = require("./models/tripsModel");

// express app
const app = express();

// middlewares
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// express routes 
app.use("/api/routes", routesRoutes);
app.use("/api/trips", tripsRoutes);

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("Successfully connected to MongoDB!");
// listen to port
app.listen(process.env.PORT || 3001, () => {
  console.log(`Server is running on port: ${process.env.PORT || 3001}`);
})
})
.catch((error) => {
  console.log("Unable to connect to MongoDB!");
  console.error(error);
});


