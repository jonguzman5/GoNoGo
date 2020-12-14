import React, {Component} from 'react';

class Forecast extends Component {
  render(){
    const forecast = this.props.forecast;
    return (
      <p>{forecast.weather[0].main}</p>
    )
  }
}

export default Forecast;
