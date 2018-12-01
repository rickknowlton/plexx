import React from 'react';

export const Divider = ({ color }) => (
    <React.Fragment>
    <hr
        style={{
            color: color,
            display: "block",
            marginTop: "0.5em",
            marginBottom: "0.5em",
            marginLeft: "auto",
            marginRight: "auto",
            borderStyle: "solid",
            borderWidth: "0.01em",
            
        }}
    />
        </React.Fragment>
);