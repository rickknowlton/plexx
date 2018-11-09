
// Attempting to turn Signup into a component

import React from "react";

export const Signup = props => (
    <React.Fragment>
        <form>'
            <div className="form-group">
                <label htmlFor="username">Username: </label>
				<input
					type="text"
					name="username"
					value={props.state.username}
					onChange={props.handleChange}
				/>
            </div>
            <div className="form-group">
				<label htmlFor="password">Password: </label>
				<input
					type="password"
					name="password"
					value={props.state.password}
					onChange={props.handleChange}
				/>
            </div>
            <div className="form-group">
				<label htmlFor="confirmPassword">Confirm Password: </label>
				<input
					type="password"
					name="confirmPassword"
					value={props.state.confirmPassword}
					onChange={props.handleChange}
				/>
            </div>
				<button onClick={props.handleSubmit}>Sign up</button>
        </form>
    </React.Fragment>
);