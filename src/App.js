import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
          <Header className='header-color' title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Home</Link>} scroll>
              <Navigation>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/games">Games</Link>
                  <Link to="/writing">Writing</Link>
                  <Link to="/blog">Blog</Link>
              </Navigation>
          </Header>
          <Drawer title="Navigation">
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/games">Games</Link>
                  <Link to="/writing">Writing</Link>
                  <Link to="/blog">Blog</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
  </div>
    );
  }
}

export default App;
