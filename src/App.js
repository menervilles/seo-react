import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Link } from 'react-router';

const jsonData = document.getElementById('root').getAttribute('data-context');
const appData = JSON.parse(decodeURI(jsonData));
const userData = appData.user;

const TIME_OUT = 5000;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user : {},
      message : "",
      el : null
    };
    window.setTimeout(() => this.setState({
        message: "Un message avec set timeout",
        el: <a href="http://www.twitter.fr" target="_blank"> Lien à suivre avec un set timeout</a>
      }),
      TIME_OUT
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
        <div>
          <span> Un message va s'afficher au bout de {TIME_OUT} ms => </span>
          <span className="">{this.state.message}</span>
        </div>
        <div className="">{this.state.el}</div>
        {this._buildLink()}
      </div>
    );
  }
}

export default App;
