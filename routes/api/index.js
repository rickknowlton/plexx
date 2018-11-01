const router = require("express").Router();
const userRoutes = require("./users");
const scoreRoutes = require("./scores");

// User routes
router.use("/user", userRoutes);

// Score routes
router.use("/scores", scoreRoutes);

module.exports = router;