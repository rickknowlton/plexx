import React from 'react';
import { Card } from "react-materialize";
import "./Highscore.css"

const Highscore = props => (
    <React.Fragment>
                <Card className='scoreboard grey darken-3 z-depth-5' textClassName='white-text' title='Highscore:'>
                    blooby - 666
                    <div id="upper_left"></div>
                    <div id="upper_right"></div>
                    <div id="lower_left"></div>
                    <div id="lower_right"></div> 
                </Card>
    </React.Fragment>
);

export default Highscore;
