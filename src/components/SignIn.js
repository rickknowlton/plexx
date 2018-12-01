import React from "react";
import { Input } from "react-materialize";

export const SignIn = props => (
    <form>

        <Input
            s={12}
            label="Username:"
            type="text"
            value={props.userName}
            onChange={props.handleInputChange}
            name="userName"
            autoComplete="current-username"
            placeholder="Username"
        />

        <Input
            s={12}
            label="Password:"
            type="password"
            value={props.password}
            onChange={props.handleInputChange}
            name="password"
            autoComplete="current-password"
            placeholder="Password"
        />
    </form>
);