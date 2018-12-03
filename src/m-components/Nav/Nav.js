import React from 'react';
import './Nav.css';
import { Button } from "react-materialize";

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
              className="waves-effect waves-light cyan accent-1 hoverable btn"
              onClick={props.showModalWithSignIn}
              >
              Sign in
            </Button>
        </li>
        <li>
        <Button
              className="waves-effect waves-light cyan accent-2 hoverable btn"
            onClick={props.showModalWithSignUp}
            >
              Register
          </Button>
        </li>
      </ul>
      }
    </div>
  </nav>
);
