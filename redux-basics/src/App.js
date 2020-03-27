import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import CounterList from './components/CounterList/CounterList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <CounterList />
      </div>
    );
  }
}

export default App;
