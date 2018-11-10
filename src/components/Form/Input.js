import React from "react";

export const Input = props => (
  <div className="form-group">
    <label htmlFor={props.name}>{props.label}</label>
    <input className="form-control" type={props.type} autoComplete={props.auto} {...props} />
  </div>
);
