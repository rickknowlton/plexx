const passport = require('passport');

module.exports = {


    // NOT WOKRING CORRECTLY
    login: (req, res) => {
        passport.authenticate('local-signin')(req, res)
        // req.user now contains the right user
        res.json({ user: req.user });
    }

};