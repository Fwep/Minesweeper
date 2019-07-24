import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.updateGame(this.props.tile, (!!(e.altKey)));
  }
  
  render() {
    const {tile} = this.props;
    const {bombed, explored, flagged} = tile;
    const numAdjBombs = tile.adjacentBombCount();
    let innerText;

    if (bombed) {
      innerText = '\u2622';
    } else if (flagged) {
      innerText = "\u2691";
    } else if (explored && numAdjBombs > 1) {
      innerText = String(numAdjBombs);
    } else {
      innerText = '';
    }

    return (
      <div onClick={this.handleClick} className={`tile`}>{innerText}</div>
    );
  }
}

export default Tile;