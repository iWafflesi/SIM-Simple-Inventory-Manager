const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
	id: { type: Number, required: true, trim: true, autoIncrement: true },
	sku: { type: Number, required: true, trim: true },
	quantity: {type: Number }
	
});

const Job= mongoose.model("Job", jobSchema);

module.exports = Job;