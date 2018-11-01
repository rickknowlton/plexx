const db = require("../models");

// Defining methods for the booksController
module.exports = {

  // Add new user
  addNewUser: function(req, res) {
      db.User
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};
