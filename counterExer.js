
import React, { Component } from 'react';

class CounterApp extends Component
  state = {
    counter: 0,
  
  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementCounter = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  resetCounter = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.decrementCounter}>Decrement</button>
        <button onClick={this.resetCounter}>Reset</button>
      </div>
    );
  }
}

export default CounterApp
import React from 'react';
import CounterApp from './CounterApp';

function App() {
  return (
    <div className="App">
      <h1>Counter Application</h1>
      <CounterApp />
    </div>
  );
}

export default App;