import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

export default class Hello extends Component {
  render() {
    return (
      <div>
      <ul>
        <Link style={titleStyle} to={`/home`}>Home</Link>
        <Link style={titleStyle} to={`/latestissues`}>Latest Comic Issues</Link>
        <Link style={titleStyle} to={`/updatedcharacters`}>Characters With Updates</Link>
        {this.props.children}
      </ul>
      </div>
    );
  }
}

var titleStyle = {
  background: '#fff',
  border: '2px #891100 solid',
  display: 'inline-block',
  fontSize: '20px',
  margin: '0 10px',
  padding: '10px',
  textAlign: 'center',
}
