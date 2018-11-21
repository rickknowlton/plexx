import React, { Component } from "react";
import { Input } from "react-materialize";

export const SignIn = props => (
    <form>
        <Input
            label="Username:"
            type="text"
            value={props.userName}
            onChange={props.handleInputChange}
            name="userName"
            autoComplete="current-username"
        />
        <Input
            label="Password:"
            type="password"
            value={props.password}
            onChange={props.handleInputChange}
            name="password"
            autoComplete="current-password"
        />
    </form>
);