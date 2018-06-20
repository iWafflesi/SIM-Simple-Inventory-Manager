const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: { type: String, required: true },
	password: { type: Number, required: true , unique: true},	
});

const user = mongoose.model("users", userSchema);
module.exports = user;
