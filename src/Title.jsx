import React from 'react';


var search = 'https://www.google.com/#q='

//I'd like to get this to work
//onMouseOver={{color:'grey'}} onMouseOut={color='whitesmoke'}
//at some point

export default class Title extends React.Component {
  render () {
    return (
        <div style={titleStyle} >
          <a style={aStyle} target={'_blank'} href={ search + encodeURIComponent(this.props.title)}>{this.props.title}</a>
        </div>
      )
  }
}

var titleStyle = {
  display: 'block',
  fontSize: '20px',
  height: '60px',
  margin:'0 auto',
  padding: '30px 0',
  textAlign: 'center',
  textDecoration: 'bold'
}

var aStyle = {
  color: 'whitesmoke',
  textDecoration: 'none'
}