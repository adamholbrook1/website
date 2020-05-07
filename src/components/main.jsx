import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import About from './aboutme';
import Projects from './projects';

const Main = () => (
  <Switch>
    <Route exact path="/website" component={Home} />
    <Route path="/aboutme" component={About} />
    <Route path="/projects" component={Projects} />
  </Switch>
);


export default Main;
