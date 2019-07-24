import React, { Component } from 'react';
import './index.css';

class MineSquare extends Component {
  state = {
    hasBeenClicked: false
  };

  handleClick = () => {
    const { board, colIdx, rowIdx } = this.props;
    const value = board[rowIdx][colIdx];

    if (value === 1) {
      alert('you lost');
      window.location = window.location.href;
      return null;
    }

    this.setState({ hasBeenClicked: !this.state.hasBeenClicked });
  };

  renderAdjacentMines() {
    const { board, colIdx, rowIdx } = this.props;
    let totalAdjacentMines = 0;

    // up
    if (board[rowIdx - 1]) {
      totalAdjacentMines += board[rowIdx - 1][colIdx];
    }

    // right
    if (board[rowIdx][colIdx + 1]) {
      totalAdjacentMines += board[rowIdx][colIdx + 1];
    }

    // down
    if (board[rowIdx + 1]) {
      totalAdjacentMines += board[rowIdx + 1][colIdx];
    }

    // left
    if (board[rowIdx][colIdx - 1]) {
      totalAdjacentMines += board[rowIdx][colIdx - 1];
    }

    return totalAdjacentMines;
  }

  render() {
    return (
      <button
        className={this.state.hasBeenClicked ? 'clicked square' : 'square'}
        onClick={this.handleClick}
      >
        {this.state.hasBeenClicked ? this.renderAdjacentMines() : ''}
      </button>
    );
  }
}

export default MineSquare;
