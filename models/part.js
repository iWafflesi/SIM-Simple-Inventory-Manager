const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partSchema = new Schema({
	name: { type: String, required: true, trim: true },
	sku: { type: String, required: true, trim: true },
	quantity: { type: Number, required: true, trim: true},
	material: { type: String, required: true, trim: true },
	price: {type: Number, required: true, trim: true}

		
});
const Part = mongoose.model("part", partSchema);
module.exports = Part;
