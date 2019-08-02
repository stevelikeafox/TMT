require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const { MONGODB_URI, PORT } = process.env;

mongoose.promise = global.Promise;
const promise = mongoose.connect(MONGODB_URI, { useNewUrlParser: true }); // connect to our database
promise
  .then(function(db) {
    console.log("DATABASE CONNECTED!!");
  })
  .catch(function(err) {
    console.log("CONNECTION ERROR", err);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(morgan("combined"));

require("./api/customer.js")(app);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(process.env.PORT || 3000, function() {
  console.log("Starting Server on: " + PORT);
});

module.exports = app;
