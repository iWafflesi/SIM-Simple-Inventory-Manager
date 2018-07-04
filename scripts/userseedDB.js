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

const userSeed = [
{
	username:'april01',
	password:'password01',
	admin:false
},
{
	username:'april02',
	password:'password02',
	admin:false
},
{
	username:'april03',
	password:'password03',
	admin:false
},
{
	username:'april',
	password:'password',
	admin:true
},
{
	username:"kelly",
	password:"password",
	admin:true
},
{
	username:"chris",
	password:"password",
	admin:true
},
{
	username:"ben",
	password:"password",
	admin:true
},
];

db.User
	.remove({})
	.then(() => db.User.collection.insertMany(userSeed))
	.then(data => {
		console.log(data.insertedIds.length + "users records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
