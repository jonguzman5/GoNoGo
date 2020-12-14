import React, {Component} from 'react';

class Day extends Component {
  render(){
    const { forecast, days } = this.props;
    return (
      <div className="day-container">
          <div style={{backgroundImage: `url(https://source.unsplash.com/1600x900/?${forecast.weather[0].main})`}}>
              <h1>{days}</h1>
          </div>
      </div>
    )
  }
}

export default Day;
