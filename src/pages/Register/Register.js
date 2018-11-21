import React, { Component } from "react";
import API from "../../utils/API";
import { Input, Button } from "react-materialize";
import { Link, Redirect } from "react-router-dom";
import { Row, Container, Nav, Footer } from "../../m-components";
import '../../css/container.css'
import { SignUp } from "../../components/SignUp";

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
                    userName: this.state.userName.trim(),
                    password: this.state.password,
                    email: this.state.email.trim()
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
                    // this.setState({
                    //     redirectTo: "/"
                    // })
                    window.location.href = "http://192.168.20.20:3000/";
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
            <Container>
                <Nav
                    title="plexx"
                />
                <Row>
                    <SignUp
                        userName={this.state.userName}
                        email={this.state.email}
                        password={this.state.password}
                        confirmPassword={this.state.confirmPassword}
                        handleInputChange={this.handleInputChange}
                        handleCreateUser={this.handleCreateUser}
                    />
                </Row>
                <Footer />
            </Container>
        );
    }
}

export default Register;