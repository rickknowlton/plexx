// Dependencies
// =============================================================

require('dotenv').config();

// Sets up the Express App
// =============================================================
const express = require("express"),
  passport = require('passport'),
  session = require('express-session'),
  // flash = require('connect-flash'),
  path = require("path"),
  bodyParser = require("body-parser"),
  db = require("./models"),
  app = express(),
  PORT = process.env.PORT || 3001;
// For BodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// For Passport
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
// app.use(flash());

// staticly serve the React build artifacts if NOT in development mode
if (process.env.NODE_ENV === "production") {
  console.log("Serving Static Build Content.");
  app.use(express.static("build"));
}

// Routes
// =============================================================
const routes = require('./routes');
app.use(routes);

// Basic route
app.get("/api/test", function(req, res) {
  res.json({status: "success"});
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//load passport strategies
require('./config/passport/passport')(passport,db.user);

var syncOptions = {
  force: false
};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = false;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "=======> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function() {
//   console.log("API endpoint listening on PORT " + PORT);
// });