import React from 'react';

export const Projects = () => (
  <div>
    <div className="landing-grid" id="projects-grid">
      <div className="blog-header">
        <div id="header">
          <div id="logo">Projects</div>
          <ul id="menu">
            <li><a href="/"><span>Frontend</span></a></li>
            <li><a href="/"><span>Unity (Coming soon!)</span></a></li>
          </ul>
        </div>
        <div id="projects">
          <div id="project-row-1">
            <div className="project-tile">
              <a href="https://codepen.io/adamholbrook1/pen/qQemzR" target="_blank" rel="noopener noreferrer">
                <img className="project-image" src="https://i.pinimg.com/originals/37/91/8a/37918aaaeea4ced35f2410dee12adbeb.jpg" alt="project" />
              </a>
              <div className="project-footer">
                <p className="project-name">Tribute Page</p>
              </div>
            </div>

            <div className="project-tile">
              <a href="https://codepen.io/adamholbrook1/pen/QzLppN" target="_blank" rel="noopener noreferrer">
                <img className="project-image" src="https://discourse-user-assets.s3.amazonaws.com/original/3X/a/e/ae785e69012d59eff4916f7576637c212611159f.jpg" alt="project" />
              </a>
              <div className="project-footer">
                <p className="project-name">Survey Form</p>
              </div>
            </div>
          </div>

          <div id="project-row-2">
            <div className="project-tile">
              <a href="https://codepen.io/adamholbrook1/pen/MZpdov" target="_blank" rel="noopener noreferrer">
                <img className="project-image" src="https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2018/07/ddogs.png" alt="project" />
              </a>
              <div className="project-footer">
                <p className="project-name">Product Landing Page</p>
              </div>
            </div>

            <div className="project-tile">
              <a href="https://codepen.io/adamholbrook1/pen/exxOxv" target="_blank" rel="noopener noreferrer">
                <img className="project-image" src="https://ahpdx.altervista.org/images/TechDoc.png" alt="project" />
              </a>
              <div className="project-footer">
                <p className="project-name">Technical Documentation Page</p>
              </div>
            </div>
          </div>
        </div>

        <div id="show-more">
          <a href="https://codepen.io/adamholbrook1/" className="btn hover-btn" target="_blank" rel="noopener noreferrer">Show all projects</a>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
