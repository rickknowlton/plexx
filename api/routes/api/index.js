const router = require("express").Router();
const userRoutes = require("./users");
const scoreRoutes = require("./scores");
const loginRoute = require("./login");
const logoutRoute = require("./logout");
const usernameRoute = require("./username");

// User routes
router.use("/user", userRoutes);

// Username search route
router.use("/usersearch", usernameRoute)

// Score routes
router.use("/scores", scoreRoutes);

// Login Route
router.use("/login", loginRoute);

router.use("/logout", logoutRoute);

router.use("/logintest", loginRoute);

module.exports = router;