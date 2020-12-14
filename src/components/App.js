import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';
import Forecast from './Forecast'
import '../css/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      forecast: []
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    const LAT = '40.7831'
    const LON = '-73.9712'
    const KEY = 'XXXXXXXXXXXXXX'
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${LAT}&lon=${LON}&appid=${KEY}`)
      .then(res => {
        const data = res.data;
        console.log(data.daily);
        this.setState({forecast: data.daily});
    })
  }

    render() {
      return (
        <div className="this-week-container">
          <Nav/>
          <div>
            {Object.keys(this.state.forecast).map(key => (
              <Forecast
                key={key}
                index={key}
                forecast={this.state.forecast[key]}
              />
            ))}
          </div>
        </div>
      )
    }
}

export default App;
