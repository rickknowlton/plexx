import React from 'react';
import { Row, Column, Card } from '../m-components';
import '../css/game.css';
import game from '../img/game.png';

const Game = props => (
    <React.Fragment>
    <div className="card center grey darken-4 game z-depth-5">
      {/* <h2>[Insert Game Here]</h2> */}
      <div className="game-content darken-4 z-depth-5">
      {/* <img className="responsive-img img" src={game}></img> */}
        <div id="phaser-example"></div>
      </div>
    </div>
    </React.Fragment>
);

export default Game;
