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

const materialSeed = [
	{
		name: '1/4" Flat Stock Alloy Steel',
	sku: '2hkd9',
	quantity: 5,
	price: 5.20
	},
	{
		name: '1/2" Flat Stock Alloy Steel',
	sku: '2hkf6',
	quantity: 5,
	price: 7.40
	},
	{
		name: '3/4" Flat Stock Alloy Steel',
	sku: '2hkg1',
	quantity: 5,
	price: 4.45
	},
	{
		name: '1" Flat Stock Alloy Steel',
	sku: '2hgf1',
	quantity: 5,
	price: 6.20
	},
	{
		name: '1/2 " Flat Stock Alloy Steel',
	sku: '1UXG6',
	quantity: 5,
	price: 6.20
	},
	{
		name: '3/4" Flat Stock Alloy Steel',
	sku: '1UXf2',
	quantity: 5,
	price: 7.20
	}
];

db.material
	.remove({})
	.then(() => db.material.collection.insertMany(materialSeed))
	.then(data => {
		console.log(data.insertedIds.length + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
