import axios from "axios";

export default {
	// Gets all materials
	getMaterials: function() {
		return axios.get("/api/materials");
	},
	// Gets the book with the given id
	getMaterial: function(id) {
		return axios.get("/api/materials/" + id);
	},
	// Deletes the book with the given id
	deleteMaterial: function(id) {
		return axios.delete("/api/materials/" + id);
	},
	// Saves a book to the database
	saveMaterial: function(materialData) {
		return axios.post("/api/materials", materialData);
	},
	getParts: function() {
		return axios.get("/api/parts");
	},
	// Gets the book with the given id
	getPart: function(id) {
		return axios.get("/api/parts/" + id);
	},
	// Deletes the book with the given id
	deletePart: function(id) {
		return axios.delete("/api/parts/" + id);
	},
	// Saves a book to the database
	savePart: function(partData) {
		return axios.post("/api/parts", partData);
	// },
	// getUsers: function() {
	// 	return axios.get("/api/users");
	// },
	// // Gets the book with the given id
	// getUser: function(id) {
	// 	return axios.get("/api/users/" + id);
	// },
	// // Deletes the book with the given id
	// deleteUser: function(id) {
	// 	return axios.delete("/api/users/" + id);
	// },
	// // Saves a book to the database
	// saveUser: function(userData) {
	// 	return axios.post("/api/users", userData);
	}
};
