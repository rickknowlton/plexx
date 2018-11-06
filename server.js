const express = require("express"),
  app = express(),
  passport = require('passport'),
  session = require('express-session'),
  path = require("path"),
  bodyParser = require("body-parser"),
  Sequelize = require("sequelize"),
  db = require("./models"),
  PORT = process.env.PORT || 3001;

// For BodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// For Passport
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Require API routes
const routes = require('./routes'),
  authRoute = require('./routes/auth.js');



// Define API routes here
app.use(routes);

// app.use(apiRoutes)
// 

//load passport strategies
require('./config/passport/passport')(passport,db.user);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

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