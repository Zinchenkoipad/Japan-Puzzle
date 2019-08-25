import React, { Component } from 'react';
import './App.css';
import CellTeach from './CellTeach.js';
import CellNumber from './CellNumber.js';
import CellEmpty from './CellEmpty.js'

class Teach extends Component {

  render() {
    return (
    	<div style={{display:'grid',gridTemplate: '34px 86px / 34px 86px'}}>
          <CellEmpty />
          {/*first upper*/}
          <div style={{display:'grid',gridTemplate: 'repeat(2, 17px) / repeat(5, 17px)',border: '1px solid black'}}> 
          <CellNumber /><CellNumber /><CellNumber inner="3"/><CellNumber/><CellNumber />
          <CellNumber inner="1"/><CellNumber inner="4"/><CellNumber inner="1"/><CellNumber inner="4"/><CellNumber inner="1"/>
          </div>

         
          {/*first lefter*/}
      		<div style={{display:'grid',gridTemplate: 'repeat(5, 17px) / repeat(2, 17px)',border: '1px solid black'}}> 
          <CellNumber /><CellNumber inner="1"/>
          <CellNumber /><CellNumber inner="3"/>
          <CellNumber /><CellNumber inner="5"/>
          <CellNumber inner="1"/><CellNumber inner="1"/>
          <CellNumber /><CellNumber inner="3"/>
          </div>
          <div className="box">
               <CellTeach isT="2"/><CellTeach isT="2"/><CellTeach isT="1"/><CellTeach isT="2"/><CellTeach isT="2"/>
               <CellTeach isT="2"/><CellTeach isT="1"/><CellTeach isT="1"/><CellTeach isT="1"/><CellTeach isT="2"/>
               <CellTeach isT="1"/><CellTeach isT="1"/><CellTeach isT="1"/><CellTeach isT="1"/><CellTeach isT="1"/>
               <CellTeach isT="2"/><CellTeach isT="1"/><CellTeach isT="2"/><CellTeach isT="1"/><CellTeach isT="2"/>
               <CellTeach isT="2"/><CellTeach isT="1"/><CellTeach isT="1"/><CellTeach isT="1"/><CellTeach isT="2"/>
          </div>
     </div>
    );
  }
}

export default Teach;
