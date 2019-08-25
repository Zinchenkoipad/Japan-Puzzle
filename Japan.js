import React, { Component } from 'react';
import './App.css';
import Box from './Box.js';

class Japan extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {isToggleOn: true};

  render() {
    return (
    	<div className="japan">
      		<Box /><Box /><Box /><Box /><Box />
      		<Box /><Box /><Box /><Box /><Box />
          <Box /><Box /><Box /><Box /><Box />
          <Box /><Box /><Box /><Box /><Box />
          <Box /><Box /><Box /><Box /><Box />
      	</div>
    );
  }
}

export default Japan;
