import React, { Component } from 'react';
import {XYPlot, XAxis ,YAxis , LineMarkSeries, HorizontalGridLines, VerticalGridLines } from 'react-vis';

export class Line extends Component {
  render() {
    const Linedata = [
      {x: 1, y: 8},
      {x: 2, y: 5},
      {x: 6, y: 2},
      {x: 3, y: 0},
      {x: 4, y: 1}, 
    ];
    return (
      <div>
        <XYPlot height={300} width={300} >
          <XAxis/><YAxis/>
          <HorizontalGridLines />
          <VerticalGridLines />
          <LineMarkSeries data={Linedata}   />
        </XYPlot>
   
      </div>
    )
  }
}

export default Line
