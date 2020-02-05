import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import About from './aboutme';
import Projects from './projects';
import Writing from './writing';

const Main = () => (
  <Switch>
    <Route exact path="/website" component={Home} />
    <Route path="/aboutme" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/writing" component={Writing} />
  </Switch>
);


export default Main;
