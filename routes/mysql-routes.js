const express = require("express");
const router = express.Router();
const db = require("../models");
const Sequelize = require("sequelize");

// Home page
router.post("/", function(req, res) {
    res.json("this route is working");
})

// Get who is currently logged in
router.get("/api/user", (req, res) => {
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