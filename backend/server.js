const express = require("express");

const cors = require("cors");

require("dotenv").config();


const app = express();

const port = process.env.PORT || 3001;
app.use(express.static('public'));

app.use(cors());

app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// require database connection 
const dbConnect = require("./db/dbConnect");

// execute database connection 
dbConnect();

