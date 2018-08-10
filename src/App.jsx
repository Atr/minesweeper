import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Board from './Board';

class App extends Component {
  constructor(props) {
    super(props);

    // bind area

    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <h1>
          App is live!
        </h1>
        <Board />
      </div>
    );
  }
}

export default hot(module)(App);
