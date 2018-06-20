const router = require("express").Router();
const productionController = require("../../controllers/productionController");

// Matches with "/api/production"
router.route("/")
	.get(productionController.findAll)
	.post(productionController.create);

// Matches with "/api/production/:id"
router
	.route("/:id")
	.get(productionController.findById)
	.put(productionController.update)
	.delete(productionController.remove);

module.exports = router;
