import React, { Component } from "react";
import { Nav, Footer } from "../../m-components";
import { Container, Col, Row } from "react-materialize";
import Game from "../../components/Game";
import Highscore from "../../components/Highscore";
import Score from "../../components/Score";
import "../../css/container.css";
import Modal from "../../components/Modal";
import API from "../../utils/API";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.getUserAtPageLoad = this.getUserAtPageLoad.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {
            userCheat: "",
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
            usernameStateAvailability: "Username",
            checkEmail: "",
            registerNewEmail: "Email",
            emailAvailability: false,
            loggedIn: false,
            displayName: null,
            redirectTo: null,
            showSigninForm: true,
            failedLogin: false,
            show: false,
            usernameAvailable: true,
            displayUnmatchedPasswords: false,
            failedMatchingPasswords: false
        }   
    }

    componentDidMount() {
        this.getUserAtPageLoad();
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSigninForm = (event) => {
        event.preventDefault();
        this.setState({
            showSigninForm: true
        })
    };

    toggleSignInRegisterForm = (event) => {
        event.preventDefault();
        if (this.state.showSigninForm) {
            this.setState({
                userName: "",
                email: "",
                password: "",
                showSigninForm: false
            })
        }
        else {
            this.setState({
                userCheat: "",
                userName: "",
                email: "",
                password: "",
                confirmPassword: "",
                usernameStateAvailability: "Username",
                checkEmail: "",
                registerNewEmail: "Email",
                showSigninForm: true
            })
        }
    };

    handleLogin = (event) => {
        event.preventDefault();
        API.login({
            // email: this.state.email,
            userName: this.state.userName.trim(),
            password: this.state.password,
        }).then(res => {
            console.log("Logged in as:");
            console.log(`username: ${res.data.user.userName}\nid: ${res.data.user.id}`);
            this.setState({
                loggedIn: true,
                displayName: res.data.user.userName,
                userName: "",
                password: "",
                email: ""
            })
            this.toggleModal();
        })
        .catch(err => {
            // console.log(err);
            console.log("failed login");
            this.setState({
                password: "",
                failedLogin: true
            })
        });
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

    handleCreateUser = (event) => {
        event.preventDefault();
        console.log("create user btn clicked");
        if (this.state.userName && this.state.password && this.state.email) {
            if (this.state.password === this.state.confirmPassword) {
                const that = this;
                API.addUser({
                    userName: this.state.userName.trim(),
                    password: this.state.password,
                    email: this.state.email.trim()
                })
                .then(function(response) {
                    console.log("user");
                    console.log(response.data);
                    console.log("user id: " + response.data.user.id);
                    that.toggleModal();
                    that.setState({
                        userName: '',
                        email: '',
                        password:'',
                        confirmPassword:'',
                        loggedIn: true,
                        displayName: response.data.user.userName,
                        failedMatchingPasswords: false
                    });
                    API.setEmptyScores({
                        UserId: response.data.user.id
                    })
                })
                .catch(err => console.log(err));
            } else {
                console.log("passwords do not match");
                this.setState({
                    failedMatchingPasswords: true
                })
            }
        }
    };

    // Get logged in userData
    getUserAtPageLoad = () => {
        API.getUser().then(res => {
            if (res.data.loggedIn) {
                console.log(`username: ${res.data.username}\nid: ${res.data.id}`);
                this.setState({
                    loggedIn: true,
                    displayName: res.data.username,
                    show: false
                })
            } else {
                this.setState({
                    loggedIn: false,
                    displayName: null
                })
                // console.log(`username: ${res.data.username}\nid: ${res.data.id}`);
            }
        });
    };

    // Get logged in userData
    getUser = (event) => {
        // event.preventDefault();
        console.log("Trying to get user");
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

    // Get all scores
    handleGetScores = (event) => {
        event.preventDefault();
        API.getScores().then(res => {
        console.log(`scores: ${res.data.scores}`);
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

    toggleModal = () => {
        console.log("show modal clicked")
        this.setState({
            userCheat: "",
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
            usernameStateAvailability: "Username",
            checkEmail: "",
            registerNewEmail: "Email",
            ...this.state,
            show: !this.state.show
        });
    };

    showModalWithSignIn = () => {
        this.setState({
            ...this.state,
            userCheat: "",
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
            usernameStateAvailability: "Username",
            checkEmail: "",
            registerNewEmail: "Email",
            showSigninForm: true,
            show: !this.state.show
        });
    };

    showModalWithSignUp = () => {
        this.setState({
            ...this.state,
            userCheat: "",
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
            usernameStateAvailability: "Username",
            checkEmail: "",
            registerNewEmail: "Email",
            failedLogin: false,
            showSigninForm: false,
            show: !this.state.show
        });
    };

    // Get list of usernames for new user validation
    validateUniqueUsernames = (e) => {
        this.handleInputChange(e)
        this.state.userCheat = e.target.value;
 
        if (this.state.userCheat.length > 3) {
            API.getUsernames({
                newUsername: this.state.userCheat
            })
            .then(res => {
                let takenUsernames = []
                res.data.forEach(element => {
                    takenUsernames.push(element.userName);
                })
                if (takenUsernames.length === 0) {
                    this.setState({
                        usernameAvailable: true,
                        usernameStateAvailability: "Username Available"
                    })
                }
                else if (this.state.usernameAvailable && (takenUsernames.length > 0)) {
                    this.setState({
                        usernameAvailable: false,
                        usernameStateAvailability: "Username Unavailable"
                    })
                }
            })
        }
    }

    checkForRegisteredEmails = (e) => {
        this.handleInputChange(e);
        this.state.checkEmail = e.target.value;

        if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email.trim())) {
            API.getRegisteredEmails({
                email: this.state.checkEmail
            })
            .then((res) => {
                if (res.data[0]) {
                    this.setState({
                        emailAvailability: false,
                        registerNewEmail: "Email Already Registered!"
                    })
                }
                else {
                    this.setState({
                        emailAvailability: true,
                        registerNewEmail: "Email"
                    })
                }
            })
        }
    }

    // comparePasswords(e) {
    //     this.handleInputChange(e)
	// 	if ((this.state.password === this.state.confirmPassword)
	// 	&& (this.state.password > 0) && (this.state.confirmPassword > 0)) {
	// 		this.setState({
    //             displayUnmatchedPasswords: false,
    //             passwordsMatch: true
    //         })
    //         console.log("Match!");
	// 	}
	// 	else {
	// 		this.setState({
    //             displayUnmatchedPasswords: true,
    //             passwordsMatch: false
    //         })
    //         console.log("No Match!");
	// 	}
	// }

    render() {
        return (
        <Container>
            <Row>
                <Col s={12}>
                    <Nav 
                        title="plexx"
                        handleLogout={this.handleLogout}
                        displayName={this.state.displayName}
                        loggedIn={this.state.loggedIn}
                        showModalWithSignIn={this.showModalWithSignIn}
                        showModalWithSignUp={this.showModalWithSignUp}
                    />
                </Col>
            </Row>
                <Modal
                    className="input-field"
                    show={this.state.show}
                    usernameAvailable={this.state.usernameAvailable}
                    usernameStateAvailability={this.state.usernameStateAvailability}
                    email={this.state.email}
                    userName={this.state.userName}
                    password={this.state.password}
                    confirmPassword={this.state.confirmPassword}
                    displayName={this.state.displayName}
                    loggedIn={this.state.loggedIn}
                    showSigninForm={this.state.showSigninForm}
                    failedLogin={this.state.failedLogin}
                    emailAvailability={this.state.emailAvailability}
                    registerNewEmail={this.state.registerNewEmail}
                    failedMatchingPasswords={this.state.failedMatchingPasswords}
                    // onChange functions
                    handleInputChange={this.handleInputChange}
                    validateUniqueUsernames={this.validateUniqueUsernames}
                    checkForRegisteredEmails={this.checkForRegisteredEmails}
                    // Actions
                    handleCreateUser={this.handleCreateUser}
                    toggleSignInRegisterForm={this.toggleSignInRegisterForm}
                    handleLogin={this.handleLogin}
                    handleLogout={this.handleLogout}
                    onClose={this.toggleModal}
                />
            <Row>
                <Col s={12}>
                    <Game/>
                </Col>
            </Row>
            <Row>
                <Col m={6} s={12}>
                    <Score/>
                </Col>
                <Col m={6} s={12}>
                    <Highscore/>
                </Col>
            </Row>
            <Row>
                <Col s={12}>
                    <Footer/>
                </Col>
            </Row>
      </Container>
        
        );
    }
}

export default MainPage;
