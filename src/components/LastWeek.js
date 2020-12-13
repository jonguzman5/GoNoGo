import React, { Component } from 'react';
import Nav from './Nav';
import '../css/LastWeek.css';

class LastWeek extends Component {
  constructor(props){
    super(props)
    this.state = {
      test: ""
    }
  }

    render() {
      return (
        <div className="last-week-container">
          <Nav/>
          <p>Last Week</p>
        </div>      
      )
    }
}

export default LastWeek;
