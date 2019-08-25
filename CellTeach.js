import React, { Component } from 'react';
import './App.css';

class CellTeach extends Component {

  render() {
    if (+this.props.isT===0){
      return (
        <div className="cell" onClick={this.handleClick} style={{backgroundColor:'white', border:'0.1px solid grey'}} >
        </div>
      )
    }else if((+this.props.isT===1)){
      return (
      <div className="cell" onClick={this.handleClick} style={{backgroundColor:'black',border:'0.1px solid grey'}} >
      </div>
      )
    }else if((+this.props.isT===2)){
      return (
      <div className="cell" onClick={this.handleClick} style={{backgroundColor:'white',border:'0.1px solid grey',display:'flex', alignItems:'center', justifyContent:'center'}} >
      &#10005;
      </div>
      )
    }
  }
}

export default CellTeach;
