const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userControllers");

// Matches with "/api/usersearch/:"
// Search Users By Username
router.route("/")

    .post(userController.searchByUsername);

module.exports = router;