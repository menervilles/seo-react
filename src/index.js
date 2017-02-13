import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SubPage from './SubPage';
import BaseLayout from './BaseLayout';
import {Router, hashHistory} from 'react-router';
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
      },
      {
        path: 'one',
        name: 'Page enfant 1',
        component: SubPage
      }
    ]
  }
]

ReactDOM.render(
  <Router history={hashHistory} routes={routesConfig} />,
  document.getElementById('root')
);
