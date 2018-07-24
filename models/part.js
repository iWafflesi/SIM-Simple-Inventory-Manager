const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partSchema = new Schema({
	partName: { type: String, required: true, trim: true },
	sku: { type: String, required: true, trim: true, unique: true },
	partQuantity: { type: Number, required: true, trim: true},
	material: { type: String, required: true, trim: true },
	partPrice: {type: Number, required: true, trim: true}

		
});
const Part = mongoose.model("part", partSchema);
module.exports = Part;
