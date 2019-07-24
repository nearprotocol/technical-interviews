import React, { Component } from 'react';
import './index.css';
import MineSquare from './mine-square';

class MineBoard extends Component {
  state = {
    board: [[0, 0, 0, 1], [0, 1, 0, 0], [0, 1, 1, 0], [1, 0, 0, 0]]
  };

  renderRow = (row, rowIdx) => {
    return (
      <div className="row" key={rowIdx}>
        {row.map((_, colIdx) => {
          return (
            <MineSquare
              key={`${rowIdx}-${colIdx}`}
              board={this.state.board}
              rowIdx={rowIdx}
              colIdx={colIdx}
            />
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div className="mine-board">{this.state.board.map(this.renderRow)}</div>
    );
  }
}

export default MineBoard;
