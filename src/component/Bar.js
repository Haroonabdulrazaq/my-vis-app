import React from 'react'
import {XYPlot, XAxis ,YAxis, VerticalBarSeries, HorizontalGridLines, VerticalGridLines} from 'react-vis';

const Bar = (props) => {
  const data = [
    {x: "Bell", y: 8},
    {x: "Yell", y: 5},
    {x: "Tell", y: 4},
    {x: "Well", y: 9},
    {x: "Sell", y: 1},
  ];
  return (
    <div>
       <XYPlot xType="ordinal" height={300} width={300} color= {props.color} onMouseEnter= {props.handleChange}>
          <XAxis/><YAxis/>
          <HorizontalGridLines />
          <VerticalGridLines />
          <VerticalBarSeries  data={data}  margin={{left: 70}} />
        </XYPlot>
    </div>
  )
}

export default Bar
