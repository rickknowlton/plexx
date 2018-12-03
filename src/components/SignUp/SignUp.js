import React from "react";
import { Input } from "react-materialize";
import './SignUp.css';


export const SignUp = props => (
	<div>
		{props.failedMatchingPasswords && <div className="error-wrapper"><div className="error-container"><span className="error-message">Passwords Did Not Match!</span></div></div>}
	
	<form className="white-text">
	<Input
		className="white-text"
		s={12}
		label={props.usernameStateAvailability}
		type="text"
		value={props.userName}
		onChange={props.validateUniqueUsernames}
		name="userName"
		auto="new-username"
		placeholder="SteveHarwell420"
	/>
	<Input
		className="white-text"
		s={12}
		label={props.registerNewEmail}
		type="email"
		value={props.email}
		// onChange={props.handleInputChange}
		onChange={props.checkForRegisteredEmails}
		name="email"
		auto="new-email"
		placeholder="steve@smashmouth.com"
	/>
	<Input
		className="white-text"
		s={12}
		label="Password"
		type="password"
		value={props.password}
		onChange={props.handleInputChange}
		name="password"
		auto="new-password"
	/>
	<Input
		className="white-text"
		s={12}
		label="Confirm Password"
		type="password"
		value={props.confirmPassword}
		onChange={props.handleInputChange}
		// onChange={props.comparePasswords}
		name="confirmPassword"
		auto="new-password"
	/>
	{/* <Button
		s={12}
		disabled={
			!(
				props.userName &&
				props.email &&
				props.password &&
				props.confirmPassword
			)
		}
		onClick={props.handleCreateUser}
		>
		Create Account
	</Button> */}
</form>
</div>
);