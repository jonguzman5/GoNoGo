import React, {Component} from 'react';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoodDay: this.props.forecast.weather[0].main == 'Clear' || this.props.forecast.weather[0].main == 'Clouds' ? true : false
    }
  }  

  render(){
    const { forecast, dayOfTheWeek } = this.props;
    const { isGoodDay } = this.state;
    const isGoodDayTF = isGoodDay ? 'Today is a good day to go out' : 'Today is a not good day to go out'
    return (
      <div className="day-container">
          <div style={{backgroundImage:`url(https://source.unsplash.com/1600x900/?${forecast.weather[0].main})`}}>
              <h1>{dayOfTheWeek}</h1>
              <p>{isGoodDayTF}</p>
          </div>
      </div>
    )
  }
}

export default Day;
