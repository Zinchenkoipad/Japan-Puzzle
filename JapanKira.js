import React, { Component } from 'react';
import './App.css';
import Box from './Box.js';
import Cell from './Cell.js';
import CellNumber from './CellNumber.js';
import CellEmpty from './CellEmpty.js'

class JapanKira extends Component {
  render() {
    return (
    	<div className="japanKira">
          <CellEmpty />
          {/*first upper*/}
          <div className="box stickyUp"> 
          <CellNumber /><CellNumber /><CellNumber /><CellNumber /><CellNumber />
          <CellNumber /><CellNumber /><CellNumber /><CellNumber /><CellNumber />
          <CellNumber /><CellNumber /><CellNumber /><CellNumber /><CellNumber />
          <CellNumber /><CellNumber /><CellNumber /><CellNumber inner="1"/><CellNumber inner="1"/>
          <CellNumber inner="2"/><CellNumber inner="4"/><CellNumber inner="4"/><CellNumber inner="18"/><CellNumber inner="2"/>
          </div>

          {/*second upper*/}
          <div className="box stickyUp"> 
          <CellNumber /><CellNumber /><CellNumber /><CellNumber /><CellNumber />
          <CellNumber /><CellNumber /><CellNumber /><CellNumber /><CellNumber />
          <CellNumber inner="1"/><CellNumber inner="1"/><CellNumber inner="1"/><CellNumber inner="1"/><CellNumber inner="1"/>
          <CellNumber inner="1"/><CellNumber inner="2"/><CellNumber inner="2"/><CellNumber inner="2"/><CellNumber inner="1"/>
          <CellNumber inner="2"/><CellNumber inner="1"/><CellNumber inner="1"/><CellNumber inner="1"/><CellNumber inner="2"/>
          </div>

          {/*third upper*/}
          <div className="box stickyUp"> 
          <CellNumber /><CellNumber /><CellNumber /><CellNumber /><CellNumber />
          <CellNumber /><CellNumber /><CellNumber /><CellNumber /><CellNumber />
          <CellNumber /><CellNumber /><CellNumber /><CellNumber /><CellNumber />
          <CellNumber inner="1"/><CellNumber />          <CellNumber inner="1"/><CellNumber/>         <CellNumber inner="2"/>
          <CellNumber inner="2"/><CellNumber inner="18"/><CellNumber inner="4"/><CellNumber inner="4"/><CellNumber inner="3"/>
          </div>

          {/*fourth upper*/}
          <div className="stickyUp" style={{display:'grid',gridTemplate: 'repeat(5, 17px) / repeat(2, 17px)',border: '1px solid black'}} > 
          <CellNumber /><CellNumber />
          <CellNumber /><CellNumber />
          <CellNumber /><CellNumber />
          <CellNumber inner="1"/><CellNumber />
          <CellNumber inner="1"/><CellNumber inner="1"/>
          </div>
          {/*first lefter*/}
      		<div className="box stickyleft"> 
          <CellNumber /><CellNumber /><CellNumber /><CellNumber /><CellNumber inner="1"/>
          <CellNumber /><CellNumber /><CellNumber /><CellNumber inner="2"/><CellNumber inner="2"/>
          <CellNumber /><CellNumber inner="1"/><CellNumber inner="1"/><CellNumber inner="1"/><CellNumber inner="1"/>
          <CellNumber /><CellNumber /><CellNumber inner="1"/><CellNumber inner="1"/><CellNumber inner="2"/>
          <CellNumber /><CellNumber /><CellNumber /><CellNumber inner="1"/><CellNumber inner="1"/>
          </div>

              <Box /><Box /><Box /><div style={{display:'grid',gridTemplate: 'repeat(5, 17px) / repeat(2, 17px)',border: '1px solid black'}} > 
                                   <Cell /><Cell />
                                   <Cell /><Cell />
                                   <Cell /><Cell />
                                   <Cell /><Cell />
                                   <Cell /><Cell />
                                   </div>
      	{/*second lefter*/}
          <div className="box stickyleft"> 
          <CellNumber /><CellNumber inner="1"/><CellNumber inner="1"/><CellNumber inner="1"/><CellNumber inner="1"/>
          <CellNumber /><CellNumber /><CellNumber /><CellNumber inner="3"/><CellNumber inner="3"/>
          <CellNumber /><CellNumber /><CellNumber inner="4"/><CellNumber inner="3"/><CellNumber inner="4"/>
          <CellNumber /><CellNumber /><CellNumber inner="4"/><CellNumber inner="3"/><CellNumber inner="4"/>
          <CellNumber /><CellNumber /><CellNumber /><CellNumber inner="3"/><CellNumber inner="3"/>
          </div>
              <Box /><Box /><Box /><div style={{display:'grid',gridTemplate: 'repeat(5, 17px) / repeat(2, 17px)',border: '1px solid black'}} > 
                                   <Cell /><Cell />
                                   <Cell /><Cell />
                                   <Cell /><Cell />
                                   <Cell /><Cell />
                                   <Cell /><Cell />
                                   </div>
          {/*third lefter*/}
          <div className="box stickyleft"> 
          <CellNumber /><CellNumber /><CellNumber /><CellNumber inner="1"/><CellNumber inner="1"/>
          <CellNumber /><CellNumber /><CellNumber /><CellNumber inner="1"/><CellNumber inner="1"/>
          <CellNumber /><CellNumber /><CellNumber /><CellNumber inner="1"/><CellNumber inner="1"/>
          <CellNumber /><CellNumber /><CellNumber /><CellNumber inner="1"/><CellNumber inner="1"/>
          <CellNumber /><CellNumber /><CellNumber inner="1"/><CellNumber inner="1"/><CellNumber inner="2"/>
          </div>
              <Box /><Box /><Box /><div style={{display:'grid',gridTemplate: 'repeat(5, 17px) / repeat(2, 17px)',border: '1px solid black'}} > 
                                   <Cell /><Cell />
                                   <Cell /><Cell />
                                   <Cell /><Cell />
                                   <Cell /><Cell />
                                   <Cell /><Cell />
                                   </div>
           {/*fourth lefter*/}
          <div className="box stickyleft"> 
          <CellNumber /><CellNumber inner="1"/><CellNumber inner="1"/><CellNumber inner="1"/><CellNumber inner="1"/>
          <CellNumber /><CellNumber /><CellNumber inner="1"/><CellNumber inner="1"/><CellNumber inner="1"/>
          <CellNumber /><CellNumber /><CellNumber inner="1"/><CellNumber inner="1"/><CellNumber inner="1"/>
          <CellNumber /><CellNumber /><CellNumber /><CellNumber /><CellNumber inner="9"/>
          <CellNumber /><CellNumber /><CellNumber /><CellNumber inner="3"/><CellNumber inner="3"/>
          </div>

              <Box /><Box /><Box /><div style={{display:'grid',gridTemplate: 'repeat(5, 17px) / repeat(2, 17px)',border: '1px solid black'}} > 
                                   <Cell /><Cell />
                                   <Cell /><Cell />
                                   <Cell /><Cell />
                                   <Cell /><Cell />
                                   <Cell /><Cell />
                                   </div>
     </div>
    );
  }
}

export default JapanKira;
