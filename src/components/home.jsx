import React from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../pictures/me_edited.png';

const Home = () => (
  <div style={{ width: '100%', margin: 'auto' }}>
    <Grid className="landing-grid" id="home-grid">
      <Cell col={12}>
        <img src={avatar} alt="avatar" className="avatar-img" />
        <div className="banner-text">
          <h1>Adam Holbrook</h1>
          <hr />
          <p>QA Engineer | Fantasy Writer | Gamer | Model Painter | Runner/Cycler</p>

          <div className="social-links">
            {/* Linkedin */}
            <a href="https://www.linkedin.com/in/adam-r-holbrook/" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-linkedin" aria-hidden="true" />
            </a>
            {/* Twitter */}
            <a href="https://twitter.com/Adzorz" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-twitter" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Cell>
    </Grid>
  </div>
);

export default Home;
