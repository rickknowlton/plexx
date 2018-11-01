const db = require("../models");

// Defining methods for the booksController
module.exports = {

    // Add new user
    addNewUser: function(req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // Get current logged in user
    getCurrentUser: function(req, res) {
        if (req.user) {
            res.json({
                username: req.user.userName,
                id: req.user.id
            });
        } else {
            res.json({
                username: "Anonymous",
                id: "Unavailable"
            });
        }
    },

    // Create empty scores row for new user with associated userID
    newUserScores: function(req, res) {
        db.Score
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // Update a level score from userID
    updateScore: function(req, res) {
        db.Score
            .update(req.body,
                { returning: true, where: {UserId: req.params.id} })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // Get all scores
    // FIXME
    getScores: function(req, res) {
        res.json({
            scores: "working route"
        })
    }
};
