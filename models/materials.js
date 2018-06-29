const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const materialSchema = new Schema({
	name: { type: String, required: true },
	sku: { type: Number, required: true },
	quantity: {type: Number }
	
});

const Materials = mongoose.model("material", materialSchema);
module.exports = Materials;

