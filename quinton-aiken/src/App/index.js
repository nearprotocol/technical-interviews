import React, { Component } from 'react';
import './index.css';
import MineBoard from './mine-board';

class App extends Component {
  render() {
    return (
      <div className="app">
        <MineBoard />
      </div>
    );
  }
}

export default App;
