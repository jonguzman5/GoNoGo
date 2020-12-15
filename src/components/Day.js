import React, {Component} from 'react';
import Form from './Form';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoodDay: this.props.forecast.weather[0].main === 'Clear' || this.props.forecast.weather[0].main === 'Clouds' ? true : false,
      toggleDropdown: false,
      todo: []
    }
  }  

  handleSubmit = item => {
    this.setState({
        todo: this.state.todo.concat(item)
    })
  }

  toggleDropdown = () => {
    return this.state.isGoodDay ? this.setState({toggleDropdown: true}) : this.setState({toggleDropdown: false})
  }

  render(){
    const { forecast, dayOfTheWeek } = this.props;
    const { isGoodDay, toggleDropdown } = this.state;
    const isGoodDayTF = isGoodDay ? 'Today is a good day to go out' : 'Today is a not good day to go out'
    const dropdownTF = toggleDropdown ? 'dropdownOn' : 'dropdownOff'
    console.log(this.state.todo)
    return (
      <div className="day-container">
          <div 
            style={{backgroundImage:`url(https://source.unsplash.com/1600x900/?${forecast.weather[0].main})`}}
            onClick={this.toggleDropdown}
          >
              <h1>{dayOfTheWeek}</h1>
              <p>{isGoodDayTF}</p>
          </div>
          <div 
            className={`dropdown ${dropdownTF}`}
            style={{backgroundImage:`url(https://source.unsplash.com/1600x900/?${forecast.weather[0].main})`}}
          >
            <h3>Please enter your plans for {dayOfTheWeek}</h3>
            <Form
              handleSubmit={this.handleSubmit}
            />
          </div>
          {this.state.todo.map((item, key) => (
              <div 
                className="item" 
                key={key} 
                index={key}
                style={{backgroundImage:`url(https://source.unsplash.com/1600x900/?${forecast.weather[0].main})`}}
              >
                <p>{item.item}</p>
              </div>
          ))}
      </div>
    )
  }
}

export default Day;
