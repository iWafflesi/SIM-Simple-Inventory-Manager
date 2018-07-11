const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("passport");
// Matches with "/api/users"

router
  .route('/login')
  .post(passport.authenticate('local'), function(req, res) {
    // Log in and send back user information
    console.log(req.user);
    res.json(req.user);
  })
  .get(function(req, res) {
    // Check to see if user is logged in
    console.log('hello from routes.users', req.user);
    if (req.user) {
      // If logged in, send back this flag and the username itself
      // NOTE: you can send back whatever you want here
      // res.json({isLoggedIn: true, username: req.user.username});
      res.send(req.user);
    } else {
      // If user isn't logged in, send back false
      res.send(false);
    }
  });

	router
  .route('/logout')
  .get(function(req,res) {
    // Log user out
    req.logout()
    console.log(req.user);
    res.json(false);
	})
  router.route("/")
	.get(usersController.findAll)
  .post(usersController.create);
  
	router
  .route('/:id')
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);


	
	module.exports = router;