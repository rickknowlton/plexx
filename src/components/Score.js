import React from 'react';
import { Input, Col, Card } from "react-materialize";
import '../css/game.css';
import game from '../img/game.png';

const Score = props => (
    <React.Fragment>
                <Card className='scoreboard grey darken-3 z-depth-5' textClassName='white-text' title='Your Score:'>
                <div id="score"></div>
                </Card>
    </React.Fragment>
);

export default Score;
