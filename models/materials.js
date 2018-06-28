const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const materialSchema = new Schema({
	name: { type: String, required: true },
	sku: { type: Number, required: true },
	quantity: { Number }
	
});

const Material = mongoose.model("Material", materialSchema);
module.exports = Material;

