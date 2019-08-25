import React, { Component } from 'react';
import './App.css';
import Cell from './Cell.js';

class Box extends Component {

  render() {
    return (
    	<div className="box">
      		<Cell /><Cell /><Cell /><Cell /><Cell />
      		<Cell /><Cell /><Cell /><Cell /><Cell />
      		<Cell /><Cell /><Cell /><Cell /><Cell />
      		<Cell /><Cell /><Cell /><Cell /><Cell />
      		<Cell /><Cell /><Cell /><Cell /><Cell />
      	</div>
    );
  }
}

export default Box;
