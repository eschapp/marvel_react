import React from 'react';

export default class Hero extends React.Component {
  render () {
    return (
        <div style={heroStyle}>
          <h1 style={heroH1}>Marvel React</h1>
        </div>
      )
  }
}

var heroStyle = {
  background: 'url(http://data.whicdn.com/images/59798882/large.png) repeat',
  color: 'white',
  fontColor: '#fff',
  height: '200px',
  margin: '0px',
  padding: '0px'
}

var heroH1 = {
  color: '#fff',
  display: 'block',
  fontSize: '80px',
  lineHeight: '1.5em',
  margin: '0 auto',
  paddingTop: '40px',
  textAlign: 'center',
  textShadow:'-5px -1px 0 #891100, 1px -1px 0 #891100, -1px 1px 0 #891100, 1px 1px 0 #891100'
}
