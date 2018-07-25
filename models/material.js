const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const materialSchema = new Schema({
	name: { type: String, required: true, trim: true },
	sku: { type: String, required: true, trim: true, unique: true },

	materialQuantity: {type: Number }, 
	price: { type: Number, required: true, trim: true },
	min: [0, "Insufficent material quantity! Please receive more materials."]
	
});

const Material= mongoose.model("Material", materialSchema);

module.exports = Material;

