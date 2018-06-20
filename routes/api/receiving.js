const router = require("express").Router();
const receivingController = require("../../controllers/receivingController");

// Matches with "/api/receiving"
router.route("/")
	.get(receivingController.findAll)
	.post(receivingController.create);

// Matches with "/api/receiving/:id"
router
	.route("/:id")
	.get(receivingController.findById)
	.put(receivingController.update)
	.delete(receivingController.remove);

module.exports = router;
