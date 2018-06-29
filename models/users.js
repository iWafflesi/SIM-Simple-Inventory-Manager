const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: { type: String, required: true , unique: true},
	password: { type: String, required: true },	
});

const Users = mongoose.model("users", userSchema);
module.exports = Users;
