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

const partSeed = [
	{
		name: 'this part',
		sku: '798441',
		quantity: 5,
		price: 19.99,
		material:'1UXf2'
	},{
		name: 'part 2',
	sku: '49465264',
	quantity: 5,
	price: 23.50,
	material:'1UXG6'
	},{
		name: 'part 3',
		sku: '49649875',
		quantity: 5,
		price: 24.99,
		material: '2hgf1'
	},{
		name: 'part 4',
		sku: '49487765',
		quantity: 5,
		price: 21.99,
		material: '2hkg1'
	},{
		name: 'part 5',
		sku: '46984789',
		quantity: 5,
		price: 18.99,
		material: '2hkf6'
	},{
		name: 'part 6',
	sku: '56456545',
	quantity: 5,
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
