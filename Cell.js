import React, { Component } from 'react';
import './App.css';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if(this.state.isToggleOn===0){
      this.setState(state => ({
        isToggleOn: 1
      }))
    }else if(this.state.isToggleOn===1){
      this.setState(state => ({
        isToggleOn: 2
      }))
    }else if(this.state.isToggleOn===2){
      this.setState(state => ({
        isToggleOn: 0
      }))
    }
  }

  render() {
    if (this.state.isToggleOn===0){
      return (
        <div className="cell" onClick={this.handleClick} style={{backgroundColor:'white', border:'0.1px solid grey'}} >
        </div>
      )
    }else if((this.state.isToggleOn===1)){
      return (
      <div className="cell" onClick={this.handleClick} style={{backgroundColor:'black',border:'0.1px solid grey'}} >
      </div>
      )
    }else if((this.state.isToggleOn===2)){
      return (
      <div className="cell" onClick={this.handleClick} style={{backgroundColor:'white',border:'0.1px solid grey',display:'flex', alignItems:'center', justifyContent:'center'}} >
      &#10005;
      </div>
      )
    }
  }
}

export default Cell;
