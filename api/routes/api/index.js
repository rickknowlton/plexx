const router = require("express").Router();
const userRoutes = require("./users");
const scoreRoutes = require("./scores");
const loginRoute = require("./login");
const logoutRoute = require("./logout");

// User routes
router.use("/user", userRoutes);

// Score routes
router.use("/scores", scoreRoutes);

// Login Route
router.use("/login", loginRoute);

router.use("/logout", logoutRoute);

router.use("/logintest", loginRoute);

module.exports = router;