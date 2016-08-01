import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div style={homeStyle}>
        <h1 style={homeTitleStyle}>Welcome to Marvel React</h1>
        <h2 style={homeSubTitleStyle}>We've assembled Marvel's Recent Comic and Character Updates</h2>
        <img style={{border: '10px #891100 outset', margin: '20px', opacity:'.8', width: '50%'}} src="./images/marvel_fight.jpg" alt="fail" />
      </div>
    );
  }
}

var homeStyle = {
  display: 'block',
  margin: '0 auto',
  textAlign: 'center',
}

var homeTitleStyle ={
  color: '#fff',
  display: 'block',
  fontSize: '40px',
  margin: '0 auto',
  paddingTop: '20px',
  textAlign: 'center',
  textDecoration: 'underline',
  textShadow:'-3px -1px 0 #891100, 1px -1px 0 #891100, -1px 1px 0 #891100, 1px 1px 0 #891100'
}

var homeSubTitleStyle ={
  color: '#fff',
  display: 'block',
  fontSize: '30px',
  margin: '0 auto',
  paddingTop: '10px',
  textAlign: 'center',
  textDecoration: 'underline',
  textShadow:'-3px -1px 0 #891100, 1px -1px 0 #891100, -1px 1px 0 #891100, 1px 1px 0 #891100'
}