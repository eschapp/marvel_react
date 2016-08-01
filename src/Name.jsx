import React from 'react';

var aStyle = {
  textDecoration: 'none',
  color: 'whitesmoke'
}

var search = 'https://www.google.com/#q='

//I'd like to get this to work
//onMouseOver={{color:'grey'}} onMouseOut={color='whitesmoke'}
//at some point

export default class Name extends React.Component {
  render () {
    return (
        <div style={nameStyle} >
          <a style={aStyle} target={'_blank'} href={ search + encodeURIComponent(this.props.name)}>{this.props.name}</a>
        </div>
      )
  }
}

var nameStyle = {
  display: 'block',
  fontSize: '20px',
  height: '40px',
  margin:'0 auto',
  padding: '30px 0',
  textAlign: 'center',
  textDecoration: 'bold'
}