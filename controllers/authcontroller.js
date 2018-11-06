const passport = require('passport');

module.exports = {

    login: (req, res) => {
        passport.authenticate('local-signin')
        // req.user now contains the right user
        res.json({ user: req.user });
    }

};