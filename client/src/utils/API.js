import axios from "axios";

export default {
<<<<<<< HEAD
	// Gets all books
	getBooks: function() {
		return axios.get("/api/books");
	},
	// Gets the book with the given id
	getBook: function(id) {
		return axios.get("/api/books/" + id);
	},
	// Deletes the book with the given id
	deleteBook: function(id) {
		return axios.delete("/api/books/" + id);
	},
	// Saves a book to the database
	saveBook: function(bookData) {
		return axios.post("/api/books", bookData);
=======
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
	saveMaterial: function(bookData) {
		return axios.post("/api/materials", bookData);
>>>>>>> master
	}
};
