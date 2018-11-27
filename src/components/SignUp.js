import React, { Component } from "react";
import { Input, Button } from "react-materialize";
import { Link, Redirect } from "react-router-dom";

export const SignUp = props => (
	<form className="white-text">
	<Input
		className="white-text"
		s={12}
		label="Username"
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
		label="Email"
		type="email"
		value={props.email}
		onChange={props.handleInputChange}
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
);