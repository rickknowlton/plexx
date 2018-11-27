const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userControllers");

// Matches with "/api/emailsearch"
// Search for existing emails
router.route("/")

    .post(userController.searchByEmail);

module.exports = router;