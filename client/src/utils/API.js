import axios from "axios";

export default {
  // Add a user to the database
  addUser: function(userData) {
    return axios.post("/api/user", userData);
  }
};
