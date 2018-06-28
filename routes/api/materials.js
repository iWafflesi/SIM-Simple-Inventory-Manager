const router = require("express").Router();
const materialsController = require("../../controllers/materialsController");

// Matches with "/api/receiving"
router.route("/")
	.get(materialsController.findAll)
	.post(materialsController.create);

// Matches with "/api/receiving/:id"
router
	.route("/:id")
	.get(materialsController.findById)
	.put(materialsController.update)
	.delete(materialsController.remove);

module.exports = router;
