const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the materials collection and inserts the books below

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/simDB",
	{
		useMongoClient: true
	}
);

const jobSeed = [
{
	id: 1,
	sku: 49649875,
	quantity:2,
	notes: "Company needs this completed ASAP"
},
{
	id: 2,
	sku:9465264,
	quantity:5,
	notes:"Once job one is completed company requires this within two business days"
},
{
	id:3,
	sku:49487765,
	quantity:4,
	notes:"This request is to be made out of copper instead of steel"
},

];

db.Job
	.remove({})
	.then(() => db.Job.collection.insertMany(jobSeed))
	.then(data => {
		console.log(data.insertedIds.length + " jobs records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
