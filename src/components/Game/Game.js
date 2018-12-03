import React from 'react';
import './Game.css';

const gameStyle = {
  // marginLeft: "auto",
  // marginRight: "auto",
  // maxHeight: 600
}

const Game = () => (
    <React.Fragment>
      <div className="card center grey darken-4 game z-depth-5">
        <div className="game-content darken-4 z-depth-5">
          <div style={gameStyle} id="plexx-game"></div>
        </div>
      </div>
    </React.Fragment>
);

export default Game;
