const express = require("express");
const router = express.Router();
const authController = require("../../controllers/authController");
const passport = require('passport');

// Matches with "/api/login"
router.route("/")
    // .post(authController.login)

    .post(passport.authenticate('local-signin'), (req, res) => {
        // req.user now contains the right user
        res.json({ user: req.user });
    })

module.exports = router;