import React, { Component } from 'react';
import {
  Hint, HorizontalGridLines, MarkSeries,
  VerticalGridLines, XAxis, XYPlot, YAxis } from 'react-vis';
import HintContent from './hint-content.js';

class scatterplot extends Component {
  constructor(props){
    super(props);

    this.state= {
      value: null
    }

    this._rememberValue = this._rememberValue.bind(this)
    this._forgetValue = this._forgetValue.bind(this)
  }

    _rememberValue(value){
      this.setState({value})
    }
    _forgetValue(){
      this.setState({
        value: null
      })
    }


  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default scatterplot
