const router = require("express").Router();
const adminController = require("../../controllers/adminsController");
const passport = require('passport');

// Matches with "/api/admin"
router.route("/create")
	.get(adminController.findAll)
	.post(adminController.create);

// Matches with "/api/admin/:id"
router
	.route("/:id")
	.get(adminController.findById)
	.put(adminController.update)
	.delete(adminController.remove);

	router
  .route('/admin')
  .post(adminController.register);

module.exports = router;