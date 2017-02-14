import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Link } from 'react-router';

const jsonData = document.getElementById('root').getAttribute('data-context');
const appData = JSON.parse(decodeURI(jsonData));
const userData = appData.user;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user : {},
      message : null,
      el : null
    };
    window.setTimeout(() => this.setState({
        message: 'Une message avec set timeout',
        el: <a href="http://www.twitter.fr" target="_blank"> Lien à suivre avec un set timeout</a>
      }),
      5000
    );
    console.log("INIT state", this.state);
  }

  componentWillMount() {
    this.setState({
      user : userData
    });
    console.log("CWM state", this.state);
  }

  componentDidMount() {
    console.log("CDM state", this.state);
  }

  _buildLink() {
    return (<div>
        <Link to="/one">Sous page routeur-react</Link>
        <Link to="/two">Sous page-2 routeur-react</Link>
    </div>)
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
        <p className="">{this.state.message}</p>
        <div className="">{this.state.el}</div>
        {this._buildLink()}
      </div>
    );
  }
}

export default App;
