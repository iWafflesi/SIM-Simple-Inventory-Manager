const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partSchema = new Schema({
	name: { type: String, required: true },
	sku: { type: Number, required: true },
	quantity: { Number }
		
});
const part = mongoose.model("parts", partSchema);
module.exports = part;

// const partSchema = new Schema({
// 	name: { type: String, required: true },
// 	quantity: { type: Number, required: true },
// 	bom: [String], // id of material(s)?
// });
