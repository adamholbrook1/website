import React from 'react';
import './App.css';
import {
  Layout, Header, Drawer, Navigation, Content,
} from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';

export const App = () => (
  <div className="demo-big-content">
    <Layout>
      <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/website">Home</Link>} scroll>
        <Navigation>
          <Link to="/aboutme">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/writing">Writing</Link>
        </Navigation>
      </Header>
      <Drawer className="menunav" title="Navigation">
        <Navigation>
          <Link to="/website">Home</Link>
          <Link to="/aboutme">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/writing">Writing</Link>
        </Navigation>
      </Drawer>
      <Content>
        <div className="page-content" />
        <Main />
      </Content>
    </Layout>
  </div>
);


export default App;
