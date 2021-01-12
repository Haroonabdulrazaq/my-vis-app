import React, { Component } from 'react';
import {XYPlot, XAxis ,YAxis , AreaSeries, HorizontalGridLines, VerticalGridLines } from 'react-vis';

export class Area extends Component {
  render() {
    const Areadata = [
      {x:  1, y: 8},
      {x:  2, y: 5},
      {x:  3, y: 2},
      {x:  4, y: 0},
      {x: 5, y: 1}, 
      {x: 6, y: 3},
      {x:  7, y: 4},
      {x:  8, y: 5}, 
    ];
    return (
      <div>
         <XYPlot  height={300} width={500}>
          <XAxis/><YAxis/>
          <HorizontalGridLines />
          <VerticalGridLines />
         <AreaSeries data= {Areadata} /> 
        </XYPlot>
      </div>
    )
  }
}

export default Area
