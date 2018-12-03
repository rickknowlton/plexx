import React from 'react';
import { Card } from "react-materialize";
import "./Score.css"

const Score = props => (
    <React.Fragment>
                <Card className='scoreboard grey darken-3 z-depth-5' textClassName='white-text' title='Your Score:'>
                  666 
                  <div id="upper_left"></div>
                  <div id="upper_right"></div>
                  <div id="lower_left"></div>
                  <div id="lower_right"></div> 
                  <div id="score"></div>
                </Card>
    </React.Fragment>
);

export default Score;
