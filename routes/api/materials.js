const router = require("express").Router();
const materialsController = require("../../controllers/materialsController");

// Matches with "/api/materials"
router.route("/")
	.get(materialsController.findAll)
	.post(materialsController.create);

// Matches with "/api/materials/:id"
router
	.route("/:id")
	.get(materialsController.findById)
	.put(materialsController.update)
	.delete(materialsController.remove);

module.exports = router;
