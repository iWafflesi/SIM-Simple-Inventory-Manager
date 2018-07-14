const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AutoIncrement = require ("mongoose-sequence")(mongoose);

const jobSchema = new Schema({
	jobNumber: { type: Number, trim: true, unique: true },
	partName: {type: String, required: true, trim: true},
	// partsku: { type: String, required: true, trim: true },
	sku: { type: String, required: true, trim: true },
	partPrice: {type: Number, required: true, trim: true},
	partQuantity: {type: Number},
	material: {type: String, required: true, trim: true},
	materialQuantity: {type: Number},
	notes:{type: String},
	date: {type: Date}




});
jobSchema.plugin(AutoIncrement, {inc_field: "jobNumber"});

const Job= mongoose.model("Job", jobSchema);

module.exports = Job;