import React from 'react';

export default class Hero extends React.Component {
  render () {
    return (
        <div style={heroStyle}>
          <h1>Hi There From the Hero</h1>
        </div>
      )
  }
}

var heroStyle = {
  background: 'url(http://data.whicdn.com/images/59798882/large.png) repeat',
  color: 'white',
  height: '200px',
  'font-color': '#fff',
  margin: 0,
  padding: 0,
}