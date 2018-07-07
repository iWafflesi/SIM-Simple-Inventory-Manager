const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AutoIncrement = require ("mongoose-sequence")(mongoose);

const jobSchema = new Schema({
	jobNumber: { type: Number, trim: true, unique: true },
	sku: { type: String, required: true, trim: true },
	quantity: {type: Number },
	username: {type: String, trim: true},
	date: {type: Date }
});
jobSchema.plugin(AutoIncrement, {inc_field: "jobNumber"});

const Job= mongoose.model("Job", jobSchema);

module.exports = Job;