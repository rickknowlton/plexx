import React from 'react';
import '../css/logo.css';

export const Nav = props => (
  <nav>
    <div className="nav-wrapper offset-s2 cyan accent-2 z-depth-5">
    {/* <a href="#" data-activates="mobile-demo" class="button-collapse show-on-large cyan accent-2"><i class="material-icons">menu</i></a> */}
    <a href="#" class="brand-logo offset-s2" target="#">{props.title}</a>

      <ul className="right hide-on-med-and-down">
        <li><a className="dropdown-trigger" data-target='dropdown1' href="#"><i className="material-icons">more_vert</i></a></li>
      </ul>
      
  <ul id='dropdown1' class='dropdown-content'>
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li class="divider" tabindex="-1"></li>
    <li><a href="#!">three</a></li>
    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
  </ul>

    </div>
  </nav>
);
