const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partSchema = new Schema({
	name: { type: String, required: true },
	sku: { type: String, required: true },
	quantity: { type: Number },
	material: { type: String, required: true }
	// price: {NumberDecimal}

		
});
const Parts = mongoose.model("part", partSchema);
module.exports = Parts;

// const partSchema = new Schema({
// 	name: { type: String, required: true },
// 	quantity: { type: Number, required: true },
// 	bom: [String], // id of material(s)?
// });
