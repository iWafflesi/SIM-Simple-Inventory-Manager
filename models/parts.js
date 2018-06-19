const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partSchema = new Schema({
	name: { type: String, required: true },
	sku: { type: Number, required: true },
	quantity: { Number }
		
});
const part = mongoose.model("parts", partSchema);
module.exports = part;