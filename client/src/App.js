import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "./utils/API";

class App extends Component {

  handleAddUser = (event) => {
    event.preventDefault();
    API.addUser({
        userName: "ErnestHemingway",
        password: "stuffs",
        email: "something@plexx.com"
    })
    .then(function(response) {
      console.log("success");
    })
    .catch(err => console.log(err));
  };

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

        <button onClick={this.handleAddUser}>add users</button>
      </div>
    );
  }
}

export default App;
