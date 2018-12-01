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
                id: req.user.id,
                loggedIn: true
            });
        } else {
            res.json({
                username: "Guest",
                id: "Unavailable",
                loggedIn: false
            });
        }
    },

    searchByUsername: function(req, res) {
        db.User.findAll({
            where: {
                userName: req.body.newUsername
            }
        }).then(function(dbUsernames) {
            res.json(dbUsernames);
        })
    },

    searchByEmail: function(req, res) {
        db.User.findAll({
            where: {
                email: req.body.email
            }
        }).then(function(dbEmail) {
            res.json(dbEmail);
        })
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
            .update(req.body, {
                returning: true,
                    where: {
                        UserId: req.params.id
                    }
                })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    getUserScores: function(req, res) {
        db.Score.findOne({
            where: {
                UserId: req.params.id
            }
        })
        .then((dbScores) => {
            res.json(dbScores);
        })
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
