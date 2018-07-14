const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AutoIncrement = require ("mongoose-sequence")(mongoose);

const jobSchema = new Schema({
	jobNumber: { type: Number, trim: true, unique: true },
	partName: {type: String, required: true, trim: true},
	partsku: { type: String, required: true, trim: true },
	partPrice: {type: Number, required: true, trim: true},
	partQty: {type: Number, required: true, trim: true},
	materialUsed: {type: String, required: true, trim: true},
	matquantity: {type: String, required: true, trim: true},
	comments: {type: String, trim: true},
	date: {type: Date}
});
jobSchema.plugin(AutoIncrement, {inc_field: "jobNumber"});

const Job= mongoose.model("Job", jobSchema);

module.exports = Job;