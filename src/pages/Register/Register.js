import React, { Component } from "react";
import logo from "../../logo.svg";
import "../../App.css";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import { Link, Redirect } from "react-router-dom";

class Register extends Component {
    state = {
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        redirectTo: null
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleCreateUser = (event) => {
        event.preventDefault();
        console.log("create user btn clicked");
        if (this.state.userName && this.state.password && this.state.email) {
            if (this.state.password === this.state.confirmPassword) {
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
                .then(() => {
                    this.setState({
                        redirectTo: "/"
                    })
                })
                .catch(err => console.log(err));
            } else {
                console.log("passwords do not match");
            }
        }
    };

    render() {
        if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
        return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Register Page</h2>
            </div>

            <div>
                <Link to="/">Home Page</Link>
            </div>
            <div>
                <Link to="/game">Game Page</Link>
            </div>

            <div>
            <form>
                <Input
                    label="Username"
                    type="text"
                    value={this.state.userName}
                    onChange={this.handleInputChange}
                    name="userName"
                    auto="new-username"
                    placeholder="SteveHarwell420"
                />
                <Input
                    label="Email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name="email"
                    auto="new-email"
                    placeholder="steve@smashmouth.com"
                />
                <Input
                    label="Password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    auto="new-password"
                />
                <Input
                    label="Confirm Password"
                    type="password"
                    value={this.state.confirmPassword}
                    onChange={this.handleInputChange}
                    name="confirmPassword"
                    auto="new-password"
                />
                <FormBtn
                disabled={
                    !(
                        this.state.userName &&
                        this.state.email &&
                        this.state.password &&
                        this.state.confirmPassword
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