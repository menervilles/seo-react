import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Link } from 'react-router';

const jsonData = document.getElementById('root').getAttribute('data-context');
const appData = JSON.parse(decodeURI(jsonData));
const userData = appData.user;

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user : {}
    }
    console.log("INIT App component state", this.state);
  }

  componentWillMount() {
    this.setState({
      user : userData
    })
    console.log("CWM App component state", this.state);
  }

  _buildLink() {
    return <Link to="/one">Sous page</Link>
  }

  render() {
    console.log("App component state", this.state);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.user.firstName}</h2>
        </div>
        <p className="App-intro">{this.state.user.lastName}</p>
        <p className="App-intro">{this.state.user.email}</p>
        <p className="App-intro">{this.state.user.address}</p>
        <p className="App-intro">{this.state.user.postCode}</p>
        {this._buildLink()}
      </div>
    );
  }
}

export default App;
