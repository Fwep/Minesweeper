import React from 'react';
import Tile from './tile'; 

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.renderTiles = this.renderTiles.bind(this);
    this.renderRows = this.renderRows.bind(this);
  }
  
  render () {
    return (
      <React.Fragment>
        {this.renderRows()}
      </React.Fragment>
    );
  }

  renderRows() {
    const {grid} = this.props.board;
    return grid.map((row, idx1) => {
      return (
        <div className={'row'} key={`row-${idx1}`}>
          {this.renderTiles(row, idx1)}
        </div>
      );
    })
  }

  renderTiles(row, i) {
    return row.map((tile, idx) => {
      return (
        <Tile
          key={i * this.props.board.gridSize + idx}
          tile={tile}
          updateGame={this.props.updateGame}
        />
      );
    });
  }
}

export default Board;