import React, { Component } from 'react';
import { connect } from 'react-redux';
import Zen from './zen.js';
import { loadZen } from "./actions";
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
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
      console.log(this.props);
    return (
      <div className="App">
        <h2>Coding Zen</h2>
        <Zen zen={this.props.zen} />
        <button
            className='btn-medium'
            onClick={this.props.loadZen}
        >
            Refresh</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    // console.log(state.zen);
    return { zen: state.zen }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadZen: () => { dispatch(loadZen()) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
