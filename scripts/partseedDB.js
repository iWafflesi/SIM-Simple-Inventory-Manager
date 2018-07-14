const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the materials collection and inserts the books below

mongoose.connect(
	process.env.MONGODB_URI || `mongodb://localhost:27017/simDB`,
	{ useNewUrlParser: true });

const partSeed = [
	{
		partName: 'this part',
		sku: '798441',
		partQuantity: 5,
		price: 19.99,
		material:'1UXf2'
	},{
		partName: 'ventilation panel',
	sku: '49465264',
	partQuantity: 5,
	price: 23.50,
	material:'1UXG6'
	},{
		partName: 'quarter panel',
		sku: '49649875',
		partQuantity: 5,
		price: 24.99,
		material: '2hgf1'
	},{
		partName: 'half panel',
		sku: '49487765',
		partQuantity: 5,
		price: 21.99,
		material: '2hkg1'
	},{
		partName: 'silencer',
		sku: '46984789',
		partQuantity: 5,
		price: 18.99,
		material: '2hkf6'
	},{
		partName: 'front panel',
	sku: '56456545',
	partQuantity: 5,
	price: 15.99,
	material: '2hkd9'
	}
];

db.Part
	.remove({})
	.then(() => db.Part.collection.insertMany(partSeed))
	.then(data => {
		console.log(data.insertedIds.length + " parts records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
