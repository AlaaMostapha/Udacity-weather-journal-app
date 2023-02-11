// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");
const app = express();
// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static("website"));
// Setup Server
const port = 4000;
const listening = () =>
  app.listen(port, () => console.log(`Server  on https://localhost:${port}`));

// Callback function to complete GET '/all'
const getAll = (req, res) =>{
  console.log('get')
   res.send(projectData).status(200)
  };
// GET Route
app.get("/all", getAll);

// Callback function to complete POST '/add'
function postData (req,res) {
 ProjectData = {
    date: req.body.date,
    temp: req.body.temp,
    content: req.body.content
};
   res.status(200).send(projectData);
}
// GET Route
app.post("/add", postData);