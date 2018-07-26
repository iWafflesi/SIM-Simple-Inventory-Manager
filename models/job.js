const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AutoIncrement = require ("mongoose-sequence")(mongoose);
// const moment = require ('moment');
// var now = moment().format();


const jobSchema = new Schema({
	jobNumber: { type: Number, trim: true, unique: true },
	partName: {type: String},
	sku: { type: String},
	partPrice: {type: Number},
	partQuantity: {type: Number},
	material: {type: String},
	materialQuantity: {type: Number},
	notes:{type: String},
	// date: {type: Date, default: now}
});
jobSchema.plugin(AutoIncrement, {inc_field: "jobNumber"});

const Job= mongoose.model("Job", jobSchema);

module.exports = Job;