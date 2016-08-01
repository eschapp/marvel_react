import React from 'react';

export default class Footer extends React.Component {
  render () {
    return (
        <div style={footerStyle}>
          <h1>Hi There From the Footer</h1>
          <h3>I mean those were some sweet sweet comics right?</h3>
        </div>
      )
  }
}

var footerStyle = {
  background: 'black',
  color: 'white',
  height: '100px',
  margin: '0px',
  padding: '0px'
}