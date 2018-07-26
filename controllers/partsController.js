const db = require("../models");
const stringify = require("json-stringify");

// Defining methods for the booksController
module.exports = {
	findAll: function (req, res) {
		db.Part
			.find(req.query)
			.sort({ date: -1 })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	findById: function (req, res) {
		console.log("you are in the controller")
		db.Part
			.findOne(req.params.sku)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));

	},
	create: function (req, res) {
		db.Part
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	update: function (req, res) {
		const info = req.body;
		console.log ("You made it to the controller PARTS " + stringify(info, null, 2));
		db.Part
			.findOneAndUpdate({sku: req.body.sku }, req.body)
			// .update({$inc:{ partQuantity: +3}})
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	
	remove: function (req, res) {
		db.Part
			.findById({ _id: req.params.id })
			.then(dbModel => dbModel.remove())
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};