import axios from "axios";

export default {
  // Add a user to the database
  addUser: function(userData) {
    return axios.post("/api/user", userData);
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
  }
};
