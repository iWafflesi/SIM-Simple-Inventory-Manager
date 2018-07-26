import axios from "axios";

export default {
	//get jobs
	getJobs: function() {
		return axios.get("/api/jobs");
	},
	// Gets the job with the given id
	getJob: function(id) {
		// console.log("API - ID: ", id);
		return axios.get("/api/jobs/" + id);
	},
	// Deletes the job with the given id
	deleteJob: function(id) {
		console.log("delete job", id)
		return axios.delete("/api/jobs/" + id);
	},
	// saves a job to the database
	updateJob: function(jobData) {
		return axios.post("/api/jobs", jobData);
	},
	// Saves a job to the database
	saveJob: function(jobData) {
		console.log("you made it to save job")
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
		console.log("you made it to API")
		return axios.post("/api/materials", materialData);

	},
	updateMaterial: function(name) {
		console.log("updating materials...", name);
		return axios.put("/api/materials/" + name, name);
	},



	getParts: function() {
		return axios.get("/api/parts");
	},
	// Gets the part with the given id
	getPart: function(sku) {
		return axios.get("/api/parts/" + sku);
	},
	// Deletes the part with the given id
	deletePart: function(id) {
		return axios.delete("/api/parts/" + id);
	},
	updatePart: function(sku){
		console.log("updating parts...", sku);
		return axios.put("/api/parts/" + sku, sku)
	},
	// saves a part to the database
	savePart: function(partData) {
		console.log("you made it to API")
		return axios.post("/api/parts/", partData);
	},
	


	getUsers: function() {
		// console.log("you are getting to the api in utils folder....")
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

	/*
	loginCreds = {username: "alex", "password": 12345Password!}
  */
  login: function (loginCreds) {
		// console.log("login util hit", loginCreds)
		return axios.post('/api/users/login', loginCreds);
  },
  /* 
    Path to check if user is logged in
  */
  loginCheck: function() {
    return axios.get('/api/users/login')
  },
  /* 
    Path to log out
  */
  logout: function() {
    return axios.get('/api/users/logout')
  },
  /* 
    Path to register new user, you can have more fields than this but "username" and "password" must exist
    userInfo = {
      username: "alex",
      password: 12345Password!
    }
  */
  register: function(userInfo) {
		console.log("register util hit")
    return axios.post("/api/admins/register", userInfo)
  }
};
