const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userControllers");
const passport = require('passport');

// Matches with "/api/user"
router.route("/")
    .post(passport.authenticate("local-signup"), (req, res) => {
        // req.user now contains the right user
        console.log(`User ${req.user.email} signed up`);
        res.json({ 
            user: req.user
        });
    })
    .get(userController.getCurrentUser);

module.exports = router;
