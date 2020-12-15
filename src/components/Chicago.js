import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';
import Day from './Day';
import '../css/App.css';

class Chicago extends Component {
  constructor(props){
    super(props)
    this.state = {
      forecast: []
    }
  }

  componentDidMount() {
    this.getData()
  }

  dayOfTheWeek = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun", "Mon"]
  city = ""

  getData = () => {
    const LAT = '41.8781'
    const LON = '-87.6298'
    const KEY = process.env.REACT_APP_API_KEY
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${LAT}&lon=${LON}&appid=${KEY}`)
      .then(res => {
        const data = res.data
        console.log(data)
        this.city = data.timezone
        this.setState({forecast: data.daily})
    })
  }

    render() {
      return (
        <div className="week-container" style={{backgroundImage:`url(https://source.unsplash.com/1600x900/?${this.city})`}}>
          <Nav/>
          <div className="week-header">
            <h1>{this.city}</h1>
          </div>
          <div className="week-body">
            {Object.keys(this.state.forecast).map(key => (
              <Day
                key={key}
                index={key}
                forecast={this.state.forecast[key]}
                dayOfTheWeek={this.dayOfTheWeek[key]}
              />
            ))}
          </div>
        </div>
      )
    }
}

export default Chicago;
