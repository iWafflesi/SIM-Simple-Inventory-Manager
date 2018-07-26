const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the materials collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/simDB`,
{ useNewUrlParser: true });

const jobSeed = [
{
	jobNumber: 1,
	date: "01/01/1990",
	sku: 49649875,
	partName: "quarter panel",
	partQuantity:2,
	partPrice: 17.20,
	material: '1/4" Flat Stock Alloy Steel',
	materialQuantity: 1,
	notes: "Company needs this completed ASAP"
},
{
	jobNumber: 2,
	date: "01/01/1991",
	sku:9465264,
	partName: "ventilation panel",
	partQuantity:5,
	partPrice:17.50,
	material: '1/4" Flat Stock Alloy Steel',
	materialQuantity: 1,
	notes:"Once job one is completed company requires this within two business days"
},
{
	jobNumber: 3,
	date: "01/01/1992",
	sku:49487765,
	partName: ' half panel',
	partQuantity:4,
	partPrice:14.99,
	material: '1/4" Flat Stock Alloy Steel',
	materialQuantity: 1,
	notes:"This request is to be made out of steel instead of copper"
},
{
	jobNumber: 4,
	date: "01/01/1995",
	sku: 49649875,
	partName: 'quarter panel',
	partQuantity:1,
	partPrice: 23.99,
	material: '1/4" Flat Stock Alloy Steel',
	materialQuantity: 1,
	notes: "Company needs this completed by EOW"
},
{
	jobNumber: 5,
	date: "01/01/1997",
	sku:9465264,
	partName: 'ventilation panel',
	partQuantity:3,
	partPrice: 18.00,
	material: '1/4" Flat Stock Alloy Steel',
	materialQuantity: 1,
	notes:"Once job one is completed company requires this within fourteen business days"
},
{
	jobNumber: 6,
	date: "01/01/1993",
	sku:49487765,
	partName: 'half panel',
	partQuantity:2,
	partPrice:21.99,
	material: '1/4" Flat Stock Alloy Steel',
	materialQuantity: 7,
	notes:"Call when shipping is completed"
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
