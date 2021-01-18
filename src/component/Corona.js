import React, { Component } from 'react'

class Corona extends Component {
  render() {
    fetch("https://covid-19-data.p.rapidapi.com/country/all", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "5fbec538d7msh9e5378e39f8e570p164c8ajsnf8c7f46f4df4",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
      }
    })
    .then(response => {
      console.log(response.json());
    })
    .catch(err => {
      console.error(err);
    });
    return (
      <div>
        
      </div>
    )
  }
}

export default Corona;
