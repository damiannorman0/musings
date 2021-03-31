import React from 'react';
import ReactDOM from 'react-dom';

import {
  Router, Route, Switch,
} from 'react-router-dom';

import {createBrowserHistory} from "history";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import configureStore from './store';
import Detail from "./Detail";


const history = createBrowserHistory();
const store = configureStore() || {};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <Route exact path="/" component={App}/>
        <Route path="/detail/:id" component={Detail}/>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
