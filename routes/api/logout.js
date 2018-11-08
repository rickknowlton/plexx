const express = require("express");
const router = express.Router();
const authController = require("../../controllers/authController");
const passport = require('passport');

// Matches with "/api/logout"
router.route("/")
    // .post(authController.login)

    .post((req, res) => {
        if (req.user) {
            req.logout()
            res.send({ msg: 'logging out' })
        } else {
            res.send({ msg: 'no user to log out' })
        }
    })

module.exports = router;