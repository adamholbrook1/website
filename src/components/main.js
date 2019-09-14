import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import About from './aboutme';
import Games from './games';
import Writing from './writing';
import Blog from './blog';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/aboutme" component={About} />
    <Route path="/games" component={Games} />
    <Route path="/writing" component={Writing} />
    <Route path="/blog" component={Blog} />
  </Switch>
)


export default Main;
