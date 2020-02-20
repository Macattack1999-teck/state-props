import React, { Component } from 'react';
import './App.css';

import NavBar from './NavBar';
import Welcome from './welcome'

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: "Michael"
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        {this.state.name}
        <Welcome name={this.state.name}/>
        <Welcome name={"Someone Else"}/>
      </div>
    );
  }
}

export default App;
