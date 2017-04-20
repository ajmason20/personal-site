import React from 'react';

export const SkillsComp = React.createClass({
  render: function(){
    return (
      <div id="skills" className="skills-container">
        <h1>SKILLS</h1>
        <ul>
          <h2>Web Development</h2>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Sass</li>
          <li>Bootstrap</li>
        </ul>
        <ul>
          <h2>Javascript</h2>
          <li>Vanilla JS</li>
          <li>React</li>
          <li>Backbone.js</li>
        </ul>
        <ul>
          <h2>Dev Tools</h2>
          <li>Git</li>
          <li>GitHub</li>
          <li>npm</li>
          <li>Command Line</li>
        </ul>
        <div className="res-link">
          <h2>View full resume here.</h2>
          <a href="file:///Users/andrewmason/Downloads/Andrew%20Mason%20_%20Resume.pdf" target="_blank"><i className="fa fa-file-pdf-o" aria-hidden="true"></i></a>
        </div>
      </div>
    )
  }
})
