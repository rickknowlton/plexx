const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userControllers");
const db = require("../../models");
const Sequelize = require("sequelize");

// Matches with "/api/user"
router.route("/")
    .post(userController.addNewUser)
    .get(userController.getCurrentUser);

module.exports = router;