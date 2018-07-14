const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const materialSchema = new Schema({
	name: { type: String, required: true, trim: true },
	sku: { type: String, required: true, trim: true },

	materialQuantity: {type: Number }, 
	price: { type: Number, required: true, trim: true }
	
});

const Material= mongoose.model("Material", materialSchema);

module.exports = Material;

