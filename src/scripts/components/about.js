import React from 'react';

export const AboutComp = React.createClass({
  render: function(){
    return (
      <div className="about-container">
        <div id="about" className="headshot"></div>
        <p>Hi, I'm Andrew.<br/>I geek out over bouldering, great design, and new opporunities to learn. Currently residing in Charleston, SC with my black lab, Bear.</p>
      </div>
    )
  }
})
