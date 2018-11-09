import React, { Component } from "react";
import logo from "../../logo.svg";
import "../../App.css";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import { Link, Redirect } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.getUserAtPageLoad = this.getUserAtPageLoad.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {
            userName: "",
            email: "",
            password: "",
            loggedIn: false,
            displayName: null,
            redirectTo: null,
        }
    }

    componentDidMount() {
        console.log("component mounted");
        this.getUserAtPageLoad();
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleLogin = (event) => {
        event.preventDefault();
        API.login({
            email: this.state.email,
            password: this.state.password,
        }).then(res => {
            console.log("Logged in as:");
            console.log(`username: ${res.data.user.userName}\nid: ${res.data.user.id}`);
            this.setState({
                // redirectTo: "/game"
                loggedIn: true,
                displayName: res.data.user.userName
            })
        })
        .catch(err => console.log(err));
    };

    handleLogout = (event) => {
        event.preventDefault();
        API.logout()
        .then(res => {
            this.setState({
                loggedIn: false
            })
            console.log(res.data);
        })
    }

    // Get logged in userData
    getUserAtPageLoad = () => {
        API.getUser().then(res => {
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
    // Primitive - needs logic to update specific level score
    handleUpdateScore = (event) => {
        event.preventDefault();
        API.getUser().then(res => {
            API.updateScore(res.data.id, 
                {
                    levelOne: 1,
                    levelTwo: 2,
                    levelThree: 3
                }
            )
        })
    };

    render() {
        if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
        }
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Home Page</h2>
                </div>
                <div>
                    <Link to="/game">Plex Game Page</Link>
                </div>
                <div>
                    <Link to="/register">register</Link>
                </div>

                {this.state.loggedIn ?
                    <div>
                        <h1>{this.state.displayName}</h1>
                        <Link to="#" onClick={this.handleLogout}>logout</Link>
                    </div>
                    :
                    <div>
                        <div>
                            <form>
                                <Input
                                    label="Email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    name="email"
                                    auto="email"
                                    placeholder="blooby@plexx.com"
                                />
                                <Input
                                    label="Password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    name="password"
                                    auto="current-password"
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
                                    Login
                                </FormBtn>
                            </form>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Home;