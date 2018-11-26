import React from 'react';
import '../css/logo.css';
import { Input, Button } from "react-materialize";
import { Link, Redirect } from 'react-router-dom';

export const Nav = props => (
  <nav>
    <div className="nav-wrapper offset-s2 cyan accent-2 z-depth-5">
    <a href="/" className="brand-logo offset-s2">{props.title}</a>

      {props.loggedIn ?
      <ul className="right">
        <li>
          {props.displayName}
        </li>
        <li>
        <Button
            className="waves-effect waves-light cyan lighten-2 btn m-3"
            onClick={props.handleLogout}
          >
            Logout
          </Button>
        </li>
      </ul>
      :
      <ul className="right">
        <li>
          <Button
              className="waves-effect waves-light cyan lighten-2 btn m-3"
              onClick={props.showModalWithSignIn}
              >
              Sign in
            </Button>
        </li>
        <li>
          <span 
            className="clickable"
            onClick={props.showModalWithSignUp}
            >
              register
            </span>
        </li>
      </ul>
      }
    </div>
  </nav>
);
