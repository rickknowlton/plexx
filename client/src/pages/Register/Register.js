import React, { Component } from "react";
import logo from "../../logo.svg";
import "../../App.css";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";

class Register extends Component {
    state = {
        userName: "",
        email: "",
        password: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleCreateUser = (event) => {
        event.preventDefault();
        if (this.state.userName && this.state.password && this.state.email) {
        API.addUser({
            userName: this.state.userName,
            password: this.state.password,
            email: this.state.email
        })
        .then(function(response) {
            console.log("user");
            console.log(response.data);
            console.log("user id: " + response.data.user.id);
            API.setEmptyScores({
            UserId: response.data.user.id
            })
        })
        .catch(err => console.log(err));
        }
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

            <button onClick={this.handleAddUser}>add user</button>

            <div>
            <form>
                <Input
                    label="Username"
                    value={this.state.userName}
                    onChange={this.handleInputChange}
                    name="userName"
                    placeholder="SteveHarwell420 (required)"
                />
                <Input
                    label="Email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name="email"
                    placeholder="steve@smashmouth.com (required)"
                />
                <Input
                    label="Password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="(required)"
                />
                <FormBtn
                disabled={
                    !(
                        this.state.userName &&
                        this.state.email &&
                        this.state.password
                    )
                }
                onClick={this.handleCreateUser}
                >
                Create Account
                </FormBtn>
            </form>
            </div>
        </div>
        );
    }
}

export default Register;
