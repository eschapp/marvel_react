import React from 'react';


export default class Description extends React.Component {
  render () {
    return (
        <div style={descriptionStyle}>
        {this.props.description}
        </div>
      )
  }
}

var descriptionStyle = {
  color: '#fff',
  fontSize: '16px',
  margin: '5px',
  padding: '0 20px',
  textAlign: 'center'
}