import React, { Component } from "react";
import logo from "../../logo.svg";
import "../../App.css";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";

class Home extends Component {
    state = {
        userName: "",
        email: "",
        password: "",
        loggedIn: false,
        displayName: null
    }

    componentDidMount() {
        console.log("component mounted");
        this.getCurrentUser();
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

    handleLogin = (event) => {
        event.preventDefault();
        API.login({
            email: this.state.email,
            password: this.state.password,
        }).then(res => {
            console.log("Logged in as:");
            console.log(`username: ${res.data.user.userName}\nid: ${res.data.user.id}`);
        })
        .catch(err => console.log(err));
    };

    handleLogout = (event) => {
        event.preventDefault();
        API.logout()
        .then(res => {
            console.log(res.data);
        })
    }

    // Get logged in userData
    getCurrentUser = (event) => {
        API.getUser().then(res => {
            // console.log(res);
            if (res.data.loggedIn) {
                console.log(`username: ${res.data.username}\nid: ${res.data.id}`);
                this.setState({
                    loggedIn: true,
                    displayName: res.data.username
                })
            } else {
                this.setState({
                    loggedIn: false,
                    displayName: null
                })
                console.log(`username: ${res.data.username}\nid: ${res.data.id}`);
            }
        });
    };

    // Get logged in userData
    getUser = (event) => {
        event.preventDefault();
        console.log("Trying to get user");
        API.getUser().then(res => {
            // console.log(res);
            if (res.data.loggedIn) {
                console.log(`username: ${res.data.username}\nid: ${res.data.id}`);
                this.setState({
                    loggedIn: true,
                    displayName: res.data.username
                })
            } else {
                this.setState({
                    loggedIn: false,
                    displayName: null
                })
                console.log(`username: ${res.data.username}\nid: ${res.data.id}`);
            }
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

            <div>
                <button><a href="/register">Register</a></button>
                <button onClick={this.getUser}>get curent user</button>
                <button><a href="/game">Game Page</a></button>
            </div>

            <div>
                <button onClick={this.handleLogout}>logout</button>
            </div>

            <div>
            <form>
                <Input
                    label="Email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name="email"
                    placeholder="blooby (required)"
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
                        this.state.email &&
                        this.state.password
                    )
                }
                onClick={this.handleLogin}
                >
                Log me in
                </FormBtn>
            </form>
            </div>

        </div>
        );
    }
}

export default Home;