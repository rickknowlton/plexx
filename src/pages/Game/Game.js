import React, { Component } from "react";
import { Row, Container, Nav, Footer } from "../../m-components";
import Game from "../../components/Game";
import { Input } from "react-materialize";
import "../../css/container.css";
import Modal from "../../components/Modal";
import API from "../../utils/API";
import { Link, Redirect } from 'react-router-dom';

class MainPage extends Component {
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
        confirmPassword: "",
        loggedIn: false,
        displayName: null,
        redirectTo: null,
        showSigninForm: true,
        failedLogin: false,
        show: true
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
            showSigninForm: false
        })
    }
    else {
        this.setState({
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
            showSigninForm: false,
            loggedIn: true,
            displayName: res.data.user.userName,
            userName: "",
            password: "",
            email: ""
        })
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

  showModal = () => {
    console.log("show modal clicked")
    this.setState({
        ...this.state,
        show: !this.state.show
    });
  };

  showModalWithSignIn = () => {
    console.log("show modal clicked")
    this.setState({
        ...this.state,
        showSigninForm: true,
        show: !this.state.show
    });
  };

  showModalWithSignUp = () => {
    this.setState({
        ...this.state,
        showSigninForm: false,
        show: !this.state.show
    });
  };

  render() {
    return (
      <Container>
        <Nav 
          title="plexx"
          handleLogout={this.handleLogout}
          displayName={this.state.displayName}
          loggedIn={this.state.loggedIn}
          showModalWithSignIn={this.showModalWithSignIn}
          showModalWithSignUp={this.showModalWithSignUp}
        />

        <Modal
          className="input-field"
          onClose={this.showModal}
          show={this.state.show}
          email={this.state.email}
          userName={this.state.userName}
          password={this.state.password}
          confirmPassword={this.state.confirmPassword}
          handleInputChange={this.handleInputChange}
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          displayName={this.state.displayName}
          loggedIn={this.state.loggedIn}
          showSigninForm={this.state.showSigninForm}
          toggleSignInRegisterForm={this.toggleSignInRegisterForm}
          failedLogin={this.state.failedLogin}
          handleCreateUser={this.handleCreateUser}
        >
          Register Your Account
          <Row>
            <Input s={12} type="email" label="Email" />
            <Input s={12} type="password" label="Password" />
          </Row>
        </Modal>

        <Game />
        <Footer />
      </Container>
      
    );
  }
}

export default MainPage;
