import React, { Component } from 'react';
import { Elevator } from './components';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialCount: 0
    }

  }

  render() {
    return (
      <div className="App">
        <Elevator />
      </div>
    );
  }
}

export default App;
