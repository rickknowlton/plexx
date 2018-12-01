const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userControllers");
const db = require("../../models");
const Sequelize = require("sequelize");

// Matches with "/api/scores"
router.route("/")
    .post(userController.newUserScores)
    .get(userController.getScores);

router.route("/:id")
    .put(userController.updateScore)
    .get(userController.getUserScores);

module.exports = router;
