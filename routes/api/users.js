const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userControllers");
const db = require("../../models");
const Sequelize = require("sequelize");

// Match with /adduser
router.route("/")
    .post(userController.addNewUser);

// Get who is currently logged in
router.get("/api/currentuser", (req, res) => {
    if (req.user) {
        res.json({
            username: req.user.userName,
            id: req.user.id
        });
    } else {
        res.json({});
    }
});

module.exports = router;