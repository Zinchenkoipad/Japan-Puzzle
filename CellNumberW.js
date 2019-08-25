import React, { Component } from 'react';
import './App.css';

class CellNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div className="cell" onClick={this.handleClick} style={this.state.isToggleOn ? {backgroundColor:'black',border:'0.1px solid grey',color:'white'} : {backgroundColor:'white', border:'0.1px solid grey', color:'black'}} >
      {this.props.inner}
      </div>
    );
  }
}

export default CellNumber;
