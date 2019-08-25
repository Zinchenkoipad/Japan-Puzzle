import React, { Component } from 'react';
import './App.css';
import Box from './Box.js';
import Cell from './Cell.js';
import CellNumber from './CellNumber.js';
import CellNumberW from './CellNumberW.js';

import CellEmpty from './CellEmpty.js'

class JapanKira extends Component {
  render() {
    return (
    	<div style={{display:'grid',gridTemplate: '34px 86px 86px 51px / 34px 86px 86px 86px 36px'}}>
          <CellEmpty />
          {/*first upper*/}
          <div style={{display:'grid',gridTemplate: 'repeat(2, 17px) / repeat(5, 17px)',border: '1px solid black'}}> 
          <CellNumber inner="2"/><CellNumber inner="3"/><CellNumber inner="2"/><CellNumber inner="2"/><CellNumber inner="1"/>
          <CellNumber inner="6"/><CellNumber inner="4"/><CellNumber inner="3"/><CellNumber inner="4"/><CellNumber inner="3"/>
          </div>

          {/*second upper*/}
          <div style={{display:'grid',gridTemplate: 'repeat(2, 17px) / repeat(5, 17px)',border: '1px solid black'}}> 
          <CellNumber inner="1"/><CellNumber inner="1"/><CellNumber inner="1"/><CellNumber inner="2"/><CellNumber inner="2"/>
          <CellNumber inner="3"/><CellNumber inner="3"/><CellNumber inner="2"/><CellNumber inner="3"/><CellNumber inner="4"/>
          </div>

          {/*third upper*/}
          <div style={{display:'grid',gridTemplate: 'repeat(2, 17px) / repeat(5, 17px)',border: '1px solid black'}}> 
          <CellNumber inner="2"/><CellNumber inner="2"/><CellNumber inner="2"/><CellNumber inner="2"/><CellNumber inner="2"/>
          <CellNumber inner="5"/><CellNumber inner="4"/><CellNumber inner="3"/><CellNumber inner="2"/><CellNumber inner="1"/>
          </div>

          <CellEmpty />

          {/*first lefter*/}
      		<div style={{display:'grid',gridTemplate: 'repeat(5, 17px) / repeat(2, 17px)',border: '1px solid black'}}> 
          <CellNumber inner="1"/><CellNumber inner="2"/>
          <CellNumber inner="2"/><CellNumber inner="1"/>
          <CellNumber inner="1"/><CellNumber inner="1"/>
          <CellNumber inner="2"/><CellNumber inner="2"/>
          <CellNumber inner="3"/><CellNumber inner="4"/>
          </div>

              <Box /><Box /><Box /><div style={{display:'grid',gridTemplate: 'repeat(5, 17px) / repeat(2, 17px)',border: '1px solid black'}} > 
                                  <CellNumberW inner="12"/><CellNumberW inner="2"/>
                                  <CellNumberW inner="11"/><CellNumberW inner="2"/>
                                  <CellNumberW inner="14"/><CellNumberW inner="1"/>
                                  <CellNumberW inner="7"/><CellNumberW inner="3"/>
                                  <CellNumberW inner="4"/><CellNumberW inner="3"/>
                                   </div>
      	{/*second lefter*/}
          <div style={{display:'grid',gridTemplate: 'repeat(5, 17px) / repeat(2, 17px)',border: '1px solid black'}}> 
          <CellNumber inner="2"/><CellNumber inner="5"/>
          <CellNumber inner="2"/><CellNumber inner="7"/>
          <CellNumber inner="2"/><CellNumber inner="9"/>
          <CellNumber inner="2"/><CellNumber inner="6"/>
          <CellNumber inner="2"/><CellNumber inner="7"/>
          </div>

              <Box /><Box /><Box /><div style={{display:'grid',gridTemplate: 'repeat(5, 17px) / repeat(2, 17px)',border: '1px solid black'}} > 
                                  <CellNumberW inner="5"/><CellNumberW inner="1"/>
                                  <CellNumberW inner="2"/><CellNumberW inner="2"/>
                                  <CellNumberW inner="3"/><CellNumberW inner="2"/>
                                  <CellNumberW inner="4"/><CellNumberW inner="2"/>
                                  <CellNumberW inner="6"/><CellNumberW inner="1"/>
                                   </div>
                    <CellEmpty />

          {/*first upper*/}
          <div style={{display:'grid',gridTemplate: 'repeat(2, 17px) / repeat(5, 17px)',border: '1px solid black'}}> 
          <CellNumberW inner="1"/><CellNumberW inner="2"/><CellNumberW inner="3"/><CellNumberW inner="2"/><CellNumberW inner="5"/>
          <CellNumberW inner="2"/><CellNumberW inner="2"/><CellNumberW inner="2"/><CellNumberW inner="3"/><CellNumberW inner="2"/>
          <CellNumberW inner=""/><CellNumberW inner="2"/><CellNumberW inner=""/><CellNumberW inner=""/><CellNumberW inner=""/>
          </div>

          {/*second upper*/}
          <div style={{display:'grid',gridTemplate: 'repeat(3, 17px) / repeat(5, 17px)',border: '1px solid black'}}> 
          <CellNumberW inner="6"/><CellNumberW inner="6"/><CellNumberW inner="7"/><CellNumberW inner="4"/><CellNumberW inner="3"/>
          <CellNumberW inner="2"/><CellNumberW inner="2"/><CellNumberW inner="2"/><CellNumberW inner="2"/><CellNumberW inner="2"/>
          <CellNumberW inner=""/><CellNumberW inner=""/><CellNumberW inner=""/><CellNumberW inner=""/><CellNumberW inner="2"/>
          </div>

          {/*third upper*/}
          <div style={{display:'grid',gridTemplate: 'repeat(3, 17px) / repeat(5, 17px)',border: '1px solid black'}}> 
          <CellNumberW inner="3"/><CellNumberW inner="4"/><CellNumberW inner="4"/><CellNumberW inner="4"/><CellNumberW inner="5"/>
          <CellNumberW inner="2"/><CellNumberW inner="2"/><CellNumberW inner="2"/><CellNumberW inner="2"/><CellNumberW inner="2"/>
          <CellNumberW inner=""/><CellNumberW inner=""/><CellNumberW inner=""/><CellNumberW inner=""/><CellNumberW inner=""/>
          </div>

          <CellEmpty />
           
     </div>
    );
  }
}

export default JapanKira;
