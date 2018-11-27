import axios from "axios";

export default {
  // Add a user to the database
  addUser: function(userData) {
    console.log("register new user request");
    console.log(userData);
    return axios.post("/api/user", userData);
  }, 

  // Login user
  login: function(userData) {
    console.log("login user request");
    console.log(userData);
    return axios.post("/api/login", userData);
  },

  logout: () => {
    return axios.get("/api/logout");
    },

  // Get current User
  getUser: function() {
    return axios.get("/api/user");
  },

  // Set initial score row
  setEmptyScores: function(userData) {
    return axios.post("/api/scores", userData);
  },

  updateScore: function(id, userData) {
    return axios.put(`api/scores/${id}`, userData);
  },

  // Get level scores
  getScores: function() {
    return axios.get("/api/scores");
  },

  // get all matching usernames
  getUsernames: function(key) {
    return axios.post(`/api/usersearch/`, key);
  },

  getRegisteredEmails: function(key) {
    console.log(key);
    return axios.post(`/api/emailsearch/`, key);
  }
};