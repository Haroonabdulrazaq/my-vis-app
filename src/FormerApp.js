import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
// import Bar from "./component/Bar";
// import Line from "./component/Line";
// import Area from "./component/Area";
// import Example from "./component/Example";
// import {  Treemap, RadialChart  } from 'react-vis';


class FormerApp extends Component {
  constructor(props){
    super(props)
    this.state ={
      color: "green",
      useSVG: true,
      bar: true,
      line: false,
      area: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this)
}
  handleChange(){
    this.setState((state, props)=>({
      color: state.color === "green" ? "yellow"  : "green" 
    }))
  }

  handleSelectChange(e){
    if(this.state.bar){
      this.setState((state, props)=>({
        [e.target.value]: true,
        bar: false
      }))
    } else if(this.state.line) {
      this.setState((state, props)=>({
        [e.target.value]: true,
        line: false
      }))
    }else if(this.state.area){
      this.setState((state, props)=>({
        [e.target.value]: true,
        area: false
      }))
    }
    const newEvent = e.target.value
    console.log(newEvent)
  }
  
  render() {
 
    const myData = [ {angle: 1, radius: 10}, 
                     {angle: 2, label: 'Super Custom label', subLabel: 'With annotation', radius: 20},
                     {angle: 5, radius: 5, label: 'Alt Label'},
                     {angle: 3, radius: 14}, 
                     {angle: 5, radius: 12, subLabel: 'Sub Label only', className: 'custom-class'} ];
    
    
  const TreeData = {
    "title": "analytics",
    "color": "#12939A",
    "children": [
      {
      "title": "cluster",
      "children": [
        {"title": "AgglomerativeCluster", "color": "#12939A", "size": 3938},
        {"title": "CommunityStructure", "color": "#12939A", "size": 3812},
        {"title": "HierarchicalCluster", "color": "#12939A", "size": 6714},
        {"title": "MergeEdge", "color": "#12939A", "size": 743}
      ]
      },
      {
      "title": "graph",
      "children": [
        {"title": "BetweennessCentrality", "color": "#12939A", "size": 3534},
        {"title": "LinkDistance", "color": "#12939A", "size": 5731},
        {"title": "MaxFlowMinCut", "color": "#12939A", "size": 7840},
        {"title": "ShortestPaths", "color": "#12939A", "size": 5914},
        {"title": "SpanningTree", "color": "#12939A", "size": 3416}
      ]
      },
      {
      "title": "optimization",
      "children": [
        {"title": "AspectRatioBanker", "color": "#12939A", "size": 7074}
      ]
      }
    ]
    }
    
    const STYLES = {
      SVG: {
        stroke: '#0f0',
        strokeWidth: '0.25',
        strokeOpacity: 0.5
      },
      DOM: {
        border: 'thin solid #0f0',
        strokeWidth: '0.25',
      }
    };
    return (
      <div className="App">
        <form>
          <select onChange={this.handleSelectChange}>
            <option value="bar" name="bar" >Bar</option>
            <option value="area" name="area"  >Area</option>
            <option value="line" name="line" >Line</option>
          </select>
        </form>
        
        <button style={{position: 'fixed'}}onClick={()=> this.setState((state, props)=>({useSVG: !state.useSVG }))}>Toggle SVG</button>
        {  this.state.area &&  <Area /> } 
        { this.state.line && <Line /> }
        { this.state.bar && 
         <Bar color= {this.state.color} handleChange= {this.handleChange}/>
         }
        
        <Example />
        
        <RadialChart data={myData} width={300} height={300} />

        <Treemap
          title={'My New Treemap'}
          animation
          width={600}
          height={600}
          data={TreeData}
          mode= 'circlePack'
          style= {STYLES[this.state.useSVG ? 'SVG' : 'DOM']}
        />

      </div>
    );
  }
}

export default FormerApp;