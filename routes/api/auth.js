const router = require('express').Router();
const passport = require('passport');
const usersController = require('../../controllers/usersController');
const adminsController = require('../../controllers/adminsController');

// Matches with "/api/user/login"
router
  .route('/login')
  .post(passport.authenticate('local'), function(req, res) {
		console.log('hasdfs this is in your backend routes/auth')
    // Log in and send back user information
    console.log(req.user);
    res.json(req.user);
  })
  .get(function(req, res) {
    // Check to see if user is logged in
    console.log(req.user);
    if (req.user) {
      // If logged in, send back this flag and the username itself
      // NOTE: you can send back whatever you want here
      res.json({isLoggedIn: true, username: req.user.username});
    } else {
      // If user isn't logged in, send back false
      res.json(false);
    }
  });

// logout route
router
  .route('/logout')
  .get(function(req,res) {
    console.log(req.user);
    // Log user out
    req.logout()
    console.log(req.user);
    res.redirect ("/")
  })

// Matches with "/api/user/:id"
router
  .route('/:id')
  .get(usersController.findById)
  .put(adminsController.update)
  .delete(adminsController.remove);

// register a new user ("/api/user/register")
router
  .route('/register')
  .post(adminsController.register);

module.exports = router;