import React from 'react';
//import Route from 'react-router';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

import App from 'containers/App';
import About from 'containers/About';
import Dashboard from 'containers/Dashboard';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="about" component={About} />
  </Route>
);
