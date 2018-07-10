const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("passport");
// Matches with "/api/users"

router
.route('/login')
.post(passport.authenticate('local'), function(req, res) {
	// Log in and send back user information
	console.log('hellooooooooo')
	console.log(req.user);
	res.json(req.user);
})
// .post((request, response) => {
// 	passport.authenticate('local')
// 	console.log('the post was found');
// 	response.send('you got me');
// })
.get(function(req, res) {
	// Check to see if user is logged in
	console.log('hello', req.user);
	if (req.user) {
		// If logged in, send back this flag and the username itself
		// NOTE: you can send back whatever you want here
		res.json({isLoggedIn: true, username: req.user.username});
	} else {
		// If user isn't logged in, send back false
		res.json(false);
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

	router
  .route('/:id')
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);


	
	module.exports = router;