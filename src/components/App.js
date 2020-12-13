import React, { Component } from 'react';
import Nav from './Nav';
import '../css/App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      test: ""
    }
  }

    render() {
      return (
        <div className="this-week-container">
          <Nav/>
          <p>This Week</p>
        </div>      
      )
    }
}

export default App;
