import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';

class Game extends React.Component {
  constructor(props) {
    super(props);

    const board = new Minesweeper.Board(9, 9);

    this.state = {
      board: board
    }

    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, flagged) {
    if (flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }

    this.setState({board: this.state.board});
  }

  render() {
    return (
      <div id='board'>
        <Board board={this.state.board} updateGame={this.updateGame} />
      </div>
    );
  }
};

export default Game;