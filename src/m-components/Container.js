import React from 'react';
import '../css/container.css';

export const Container = props => (
  <div className="container">
    {props.children}
  </div>
);
