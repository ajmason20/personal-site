import $ from 'jquery';
import React from 'react';

import {ProjectsComponent} from './portfolio.js'
import {ContactFooter} from './contact-footer.js'
import {AboutComp} from './about.js'
import {SkillsComp} from './skills.js'

export const NavBar = React.createClass({


  render: function(){
    return (
      <div className="nav-bar">
        <a href="#">HOME</a>
        <a href="#projects">PROJECTS</a>
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="#contact">CONTACT</a>
      </div>

    )
  }
})
