import React from 'react';
import '../css/logo.css';
import { Input, Button } from "react-materialize";
import { Link, Redirect } from 'react-router-dom';

export const Nav = props => (
  <nav>
    <div className="nav-wrapper offset-s2 cyan accent-2 z-depth-5">
    {/* <a href="#" data-activates="mobile-demo" className="button-collapse show-on-large cyan accent-2"><i class="material-icons">menu</i></a> */}
    <a href="#!" className="brand-logo offset-s2" target="#!">{props.title}</a>

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
      (!props.showSigninForm) ?
      <ul className="right">
        
        <li>
          <Button
              className="waves-effect waves-light cyan lighten-2 btn m-3"
              onClick={props.handleSigninForm}
            >
              Sign in
            </Button>
        </li>
        <li>
          <Link to="/register">register</Link>
        </li>
      </ul>
      :
        <ul className="right">
          <li>
            <Input
              label="Username:"
              type="text"
              value={props.userName}
              onChange={props.handleInputChange}
              name="userName"
              autoComplete="current-username"
              // placeholder="blooby"
            />
          </li>
          <li>
            <Input
              label="Password:"
              type="password"
              value={props.password}
              onChange={props.handleInputChange}
              name="password"
              autoComplete="current-password"
            />
          </li>
          <li>
            <Button
              className="waves-effect waves-light cyan lighten-2 btn m-3"
              // disabled={
              //   !(
              //       props.userName &&
              //       props.password
              //   )
              // }
              onClick={props.handleLogin}
            >
              Sign in
            </Button>
          </li>
          <li>
            <Link to="/register">register</Link>
          </li>
        </ul>
      }

      {/* <ul className="right hide-on-med-and-down">
        <li><a className="dropdown-trigger" data-target='dropdown1' href="#!"><i className="material-icons">more_vert</i></a></li>
      </ul>
      
      <ul id='dropdown1' className='dropdown-content'>
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li className="divider" tabIndex="-1"></li>
        <li><a href="#!">three</a></li>
        <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
        <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
      </ul> */}

    </div>
  </nav>
);
