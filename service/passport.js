const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require ('mongoose');
const User = mongoose.model("User");


// Tell passport to make user of LocalStrategy
passport.use(new LocalStrategy((username, password, done) => {
	console.log(username);
  User.findOne({ username: username, password: password }, (err, user) => {
    // if (err) return done(err);
    // if (!user) return done(null, false);
    // if (user.password !== password) return done(null, false);
    return done(null, user);
  });
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
