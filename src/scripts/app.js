import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import {NavBar} from './components/navbar.js'
import {ProjectsComponent} from './components/portfolio.js'
import {ContactFooter} from './components/contact-footer.js'
import {AboutComp} from './components/about.js'
import {SkillsComp} from './components/skills.js'

	const PortfolioContainer = React.createClass({
		render: function(){
			return (
				<div>
					<NavBar/>
					<CSSTransitionGroup
						transitionName="pagetitle"
						transitionAppear={true}
						transitionAppearTimeout={1000}
						transitionEnter={false}
						transitionLeave={false}>
						<div className="title">
							<h1>Andrew Mason</h1>
							<h2>Software Developer</h2>
						</div>
					</CSSTransitionGroup>
					<div className="body-container">						
							<ProjectsComponent/>
							<AboutComp/>
							<SkillsComp/>
					</div>
						<ContactFooter/>

				</div>
			)
		}

	})

	ReactDOM.render (
		<PortfolioContainer/>, document.querySelector('#app-container')
	)
