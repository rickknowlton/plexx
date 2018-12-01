import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Button, Row, Col } from "react-materialize";
import "../css/container.css";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Divider } from "./Divider";

const backdropStyle = {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 60,
    zIndex: 100
};

const modalStyle = {
    backgroundColor: "#18FFFF",
    borderRadius: 5,
    color: "#fff",
    maxWidth: 500,
    minHeight: 300,
    margin: "0 auto",
    padding: 30,
    position: "relative",
    zIndex: 500
};

const footerStyle = {
    position: "relative",
    bottom: 10,
    borderTop: "10px",
    textAlign: "center"

};

const btnStyle = {
    margin: "3px"
};

const modalRoot = document.getElementById("root");

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.element = document.createElement("div");
    }
    onClose = e => {
        e.stopPropagation();
        this.props.onClose && this.props.onClose(e);
    };

    onKeyUp = e => {
        // Lookout for ESC key (27)
        if (e.which === 27 && this.props.show) {
        this.onClose(e);
        }
    };

    componentDidMount() {
        document.addEventListener("keyup", this.onKeyUp);
        modalRoot.appendChild(this.element);
    }

    componentWillUnmount() {
        document.removeEventListener("keyup", this.onKeyUp);
        modalRoot.removeChild(this.element);
    }

    render() {
        var modalUI = (
        <div style={backdropStyle}>
            <div style={modalStyle}>
            {this.props.failedLogin && <span>Incorrect Credentials</span>}

            {this.props.showSigninForm ? (
                <Row>
                <Col s={12}>
                <SignIn
                    handleInputChange={this.props.handleInputChange}
                    userName={this.props.userName}
                    password={this.props.password}
                />
                </Col>
                </Row>
            ) : (
                <SignUp
                    failedMatchingPasswords={this.props.failedMatchingPasswords}
                    handleCreateUser={this.props.handleCreateUser}
                    handleInputChange={this.props.handleInputChange}
                    userName={this.props.userName}
                    email={this.props.email}
                    password={this.props.password}
                    confirmPassword={this.props.confirmPassword}
                    validateUniqueUsernames={this.props.validateUniqueUsernames}
                    displayUnmatchedPasswords={this.props.displayUnmatchedPasswords}
                    comparePasswords={this.props.comparePasswords}
                    usernameAvailable={this.props.usernameAvailable}
                    checkForRegisteredEmails={this.props.checkForRegisteredEmails}
                    registerNewEmail={this.props.registerNewEmail}
                    usernameStateAvailability={this.props.usernameStateAvailability}
                />
            )}

            <div style={footerStyle}>
                <div className="modal-footer footerStyle">
                {this.props.showSigninForm ? (
                    <React.Fragment>
                    <Row>
                    <Button
                        className="waves-effect waves-light red lighten-2 btn"
                        onClick={e => {
                        this.onClose(e);
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        className="waves-effect waves-light cyan lighten-2 btn m-3"
                        disabled={!(this.props.userName && this.props.password)}
                        onClick={this.props.handleLogin}
                    >
                        Sign in
                    </Button>

                    <Divider color="rgba(255, 255, 255, 0.625)" />
                    Don't Have an Account? 
                    <span
                        className="clickable register hoverable pointer"
                        onClick={this.props.toggleSignInRegisterForm}
                    >
                        &nbsp;Sign Up Here!
                    </span>
                    </Row>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                    <Row>
                    <Button
                        className="waves-effect waves-light red lighten-2 btn"
                        onClick={e => {
                        this.onClose(e);
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        s={12}
                        disabled={
                        !(
                            this.props.userName &&
                            this.props.usernameAvailable &&
                            // this.props.email &&
                            this.props.emailAvailability &&
                            this.props.password &&
                            this.props.confirmPassword
                            // this.passwordsMatch
                        )
                        }
                        onClick={this.props.handleCreateUser}
                    >
                        Create Account
                    </Button>
                    </Row>
                    </React.Fragment>
                )}
                </div>
            </div>
            </div>
        </div>
        );
        if (!this.props.show) {
            return null;
        }
        return ReactDOM.createPortal(modalUI, this.element);
    }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};
