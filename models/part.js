const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partSchema = new Schema({
	name: { type: String, required: true, trim: true },
	sku: { type: String, required: true, trim: true },
	quantity: { type: Number },
	material: { type: String, required: true, trim: true }
	// price: {NumberDecimal}

		
});
const Part = mongoose.model("part", partSchema);
module.exports = Part;

// const partSchema = new Schema({
// 	name: { type: String, required: true },
// 	quantity: { type: Number, required: true },
// 	bom: [String], // id of material(s)?
// });
