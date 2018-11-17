import React, { Component } from "react";
import { Row, Container, Nav, Footer } from "../../m-components";
import Game from "../../components/Game";
import { Input, Col, Card } from "react-materialize";
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
        loggedIn: false,
        displayName: null,
        redirectTo: null,
        show: false,
        showSigninForm: false
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

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <Container>
        <Row>
        <Col s={12}>
        <Nav 
          title="plexx"
          userName={this.state.userName}
          password={this.state.password}
          handleInputChange={this.handleInputChange}
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          displayName={this.state.displayName}
          loggedIn={this.state.loggedIn}
          showSigninForm={this.state.showSigninForm}
          handleSigninForm={this.handleSigninForm}
        />
        </Col>
        </Row>

        {/* <Modal
          className="input-field"
          onClose={this.showModal}
          show={this.state.show}
        >
          Register Your Account
          <Row>
            <Input s={12} type="email" label="Email" />
            <Input s={12} type="password" label="Password" />
          </Row>
        </Modal> */}
        
        <Row>
        <Col s={12} className='grid-example'>
        <Game />
        </Col>
        {/* <Col s={3} className='grid-example'>
        <Card className='chat grey darken-3' textClassName='white-text' title='Chat'>
              </Card>
              </Col>  */}


              {/*Use your arrow keys to navigate your character thru the maze. Gather crystals to gain points and powerups. Faster times act as a multiplier to your score.*/}
        </Row>
        <Row>
          <Col s={12} m={6}>
          <Card className='scoreboard grey darken-3 z-depth-5' textClassName='white-text' title='Your Score:'>
                666 
            </Card>
         </Col>
          <Col s={12} m={6}>
            <Card className='scoreboard grey darken-3 z-depth-5' textClassName='white-text' title='Highscore:'>
                blooby - 666 
            </Card>
         </Col>
        </Row>
        <Row>
          <Col s={12}>
        <Footer />
        </Col>
          </Row>
      </Container>
    );
  }
}

export default MainPage;
