const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partSchema = new Schema({
	name: { type: String, required: true },
	quantity: { type: Number, required: true },
	bom: [String], // id of material(s)?
});

const Part = mongoose.model("Part", partSchema);

module.exports = Part;
