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
]

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
	db.part
	.remove({})
	.then(() => db.part.collection.insertMany(partSeed))
	.then(data => {
		console.log(data.insertedIds.length + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});