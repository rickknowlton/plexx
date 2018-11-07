const router = require("express").Router();
const userRoutes = require("./users");
const scoreRoutes = require("./scores");
const loginRoute = require("./login");

// User routes
router.use("/user", userRoutes);

// Score routes
router.use("/scores", scoreRoutes);

// Login Route
router.use("/login", loginRoute);

module.exports = router;