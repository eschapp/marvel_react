import React, {Component} from 'react';


export default class Poster extends React.Component {
  render () {
    return (
        <div>
          <img style={imgStyle} src={this.props.img} />
        </div>
      )
  }
}

var imgStyle ={
  display: 'inline-block',
  float: 'top',
  margin: '0 auto',
  overflow: 'hidden',
  padding: '5px',
  width: '100%'
}