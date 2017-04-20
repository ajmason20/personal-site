import $ from 'jquery';
import React from 'react';
import { CardStack, Card} from 'react-cardstack';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export const ProjectsComponent = (props) => {
  return (
    <div id="projects" className="project-container">

      <CSSTransitionGroup
        transitionName="projecttitle"
        transitionAppear={true}
        transitionAppearTimeout={2000}
        transitionEnter={false}
        transitionLeave={false}>
        <h2>Projects</h2>
      </CSSTransitionGroup>

      <CardStack
        height={800}
        width={500}
        background='#f8f8f8'
        hoverOffset={25}>

        <Card background='#1BBC9B'>
            <div className="card-head">
              <h1>Bike Safe</h1>
              <img src="./images/bike-safe.png"/>
            </div>
            <i className="fa fa-chevron-down fa-2x" aria-hidden="true"></i>
            <p>A mobile web app that displays an interactive map of crowd sourced data for commuters on bike to choose routes and see possible safety hazards added by other users. Made in React using the Google Maps API.</p>
            <i className="fa fa-window-maximize fa-2x" aria-hidden="true"> See it live</i>
            <a href="https://github.com/hhveach/bike-safe" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"> See the code</i></a>
        </Card>

        <Card background='#22313F'>
          <div className="card-head">
            <h1>ToDoList</h1>
            <img src="./images/todolist.png"/>
          </div>
          <i className="fa fa-chevron-down fa-2x" aria-hidden="true"></i>
          <p>A highly interactive application for managings and user's pending and completed tasks.</p>
          <i className="fa fa-window-maximize fa-2x" aria-hidden="true"> See it live</i>
          <a href="https://github.com/ajmason20/assignment-24" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"> See the code</i></a>
        </Card>

        <Card background='#1BBC9B'>
          <div className="card-head">
            <h1>BBC Radio</h1>
            <img src="./images/bbc-radio.png"/>
          </div>
          <i className="fa fa-chevron-down fa-2x" aria-hidden="true"></i>
          <p>A faux BBC Radio app that displays songs and artists pulled from the BBC radio API in master/featured content view, using a Backbone.js model, collections, and router.</p>
          <i className="fa fa-window-maximize fa-2x" aria-hidden="true"> See it live</i>
          <a href="https://github.com/ajmason20/assignment-20" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"> See the code</i></a>
        </Card>

        <Card background='#22313F'>
          <div className="card-head">
            <h1>Momofuku</h1>
            <img src="./images/momofuku.png"/>
          </div>
          <i className="fa fa-chevron-down fa-2x" aria-hidden="true"></i>
          <p>A responsive clone of the Momofuku Group website using SCSS.</p>
          <i className="fa fa-window-maximize fa-2x" aria-hidden="true"> See it live</i>
          <a href="https://github.com/ajmason20/assignment-07" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"> See the code</i></a>
        </Card>

      </CardStack>
    </div>
  )
}
