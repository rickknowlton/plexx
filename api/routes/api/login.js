const express = require("express");
const router = express.Router();
const passport = require('passport');

// Matches with "/api/login"
router.route("/")
    .post(passport.authenticate('local-signin'), (req, res) => {
        // req.user now contains the right user
        console.log("login.js===================================");
        res.json({ user: req.user });
    })

module.exports = router;


// , { failureFlash: 'Invalid username or password.' }