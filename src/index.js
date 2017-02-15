import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SubPage from './SubPage';
import SubPage2 from './SubPage2';
import BaseLayout from './BaseLayout';
import {Router, hashHistory, browserHistory} from 'react-router';
import './index.css';

var routesConfig = [
  { path: '/',
    component: BaseLayout,
    indexRoute: {
      component: App
    },
    childRoutes: [
      {
        path: 'home',
        name: 'Accueil',
        component: App
      }, {
        path: 'one',
        name: 'Page enfant 1',
        component: SubPage
      }, {
        path: 'two',
        name: 'Page enfant 2',
        component: SubPage2
      }
    ]
  }
]

ReactDOM.render(
  <Router history={hashHistory} routes={routesConfig} />,
  document.getElementById('root')
);
