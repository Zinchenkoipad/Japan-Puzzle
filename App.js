import React, { Component } from 'react';
import './App.css';
import JapanKira from './JapanKira.js';
import Teach from './Teach.js';
import JapanRelax1 from './JapanRelax1.js';


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {isToggleOn: true};

  render() {
    return (
      <div>
      <p>Кроссворд Киры</p>
      <JapanKira />
      <p>Как решать японские кроссворды</p>
      <Teach />
      <p>1</p>
      <JapanRelax1 />
      </div>
    );
  }
}

export default App;
