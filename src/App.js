import React, { Component } from 'react';
import Zen from './zen.js';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          zen: 'Prefer focus over features'
      };
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    fetch('https://api.github.com/zen')
        .then(function (response) {
            return response.text()
        }).then(data => {
        this.setState({ zen: data });
    })
  };

  render() {
    return (
      <div className="App">
        <h2>Coding Zen</h2>
        <Zen zen={this.state.zen} />
        <button
            className='btn-medium'
            onClick={this.handleClick}
        >
            Refresh</button>
      </div>
    );
  }
}

export default App;
