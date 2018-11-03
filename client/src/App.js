import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "./utils/API";

class App extends Component {

  handleAddUser = (event) => {
    event.preventDefault();
    API.addUser({
        userName: "Another Guy",
        password: "stuffs",
        email: "something@plexx.com"
    })
    .then(function(response) {
      console.log(response.data.id);
      API.setEmptyScores({
        UserId: response.data.id
      })
    })
    .catch(err => console.log(err));
  };

  handleCreateUser = (event) => {
    event.preventDefault();
    API.addUser({
      userName: this.userName,
      password: this.password,
      email: this.email
    })
    .then(function(response) {
      console.log(response.data.id);
      API.setEmptyScores({
        UserId: response.data.id
      })
    })
    .catch(err => console.log(err));
  };

  // Get logged in userData
  getCurrentUser = (event) => {
    event.preventDefault();
    API.getUser().then(res => {
      console.log(`username: ${res.data.username}\nid: ${res.data.id}`);
      // this.updateScore();
    });
  };

  // Get all scores
  handleGetScores = (event) => {
    event.preventDefault();
    API.getScores().then(data => {
      console.log(`scores: ${data.data.scores}`);
    })
  }

  // Update Users score
  // replace string with UserId in dataBase to update scores
  handleUpdateScore = (event) => {
    event.preventDefault();
    API.updateScore("2afeb600-6ca2-41bf-9092-603f57e2a2fa", 
      {
        levelOne: 1,
        levelTwo: 2,
        levelThree: 3
      }
    )
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={this.handleAddUser}>add user</button>
        <button onClick={this.getCurrentUser}>get current user</button>

        <div>
          <button onClick={this.handleUpdateScore}>set user score</button>
          <button onClick={this.handleGetScores}>get all scores</button>
        </div>
        <div>
          <form>
              <label>
                User Name:
                <input type='text' name='userName' />
              </label>
              <label>
                Email Address:
                <input type='email' name='email' />
              </label>
              <label>
                Password:
                <input type='text' name='password' />
              </label>
              <input type='submit' value = 'CreateUser' />
          </form>
        </div>   
      </div>
    );
  }
}

export default App;
