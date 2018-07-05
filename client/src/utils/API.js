import axios from "axios";

export default {
	//get jobs
	getJobs: function() {
		return axios.get("/api/jobs");
	},
	// Gets the job with the given id
	getJob: function(id) {
		return axios.get("/api/jobs/" + id);
	},
	// Deletes the job with the given id
	deleteJob: function(id) {
		return axios.delete("/api/jobs/" + id);
	},
	// Saves a job to the database
	saveJob: function(jobData) {
		return axios.post("/api/jobs", jobData);
	},
	// Gets all materials
	getMaterials: function() {
		return axios.get("/api/materials");
	},
	// Gets the material with the given id
	getMaterial: function(id) {
		return axios.get("/api/materials/" + id);
	},
	// Deletes the material with the given id
	deleteMaterial: function(id) {
		return axios.delete("/api/materials/" + id);
	},
	// Saves a material to the database
	saveMaterial: function(materialData) {
		return axios.post("/api/materials", materialData);
	},
	getParts: function() {
		return axios.get("/api/parts");
	},
	// Gets the part with the given id
	getPart: function(id) {
		return axios.get("/api/parts/" + id);
	},
	// Deletes the part with the given id
	deletePart: function(id) {
		return axios.delete("/api/parts/" + id);
	},
	// Saves a part to the database
	savePart: function(partData) {
		return axios.post("/api/parts", partData);
	},
	getUsers: function() {
		return axios.get("/api/users");
	},
	// Gets the user with the given id
	getUser: function(id) {
		return axios.get("/api/users/" + id);
	},
	// Deletes the user with the given id
	deleteUser: function(id) {
		return axios.delete("/api/users/" + id);
	},
	// Saves a user to the database
	saveUser: function(userData) {
		return axios.post("/api/users/register", userData);
	}
};
