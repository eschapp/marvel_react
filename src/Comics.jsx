import React from 'react';
import Comic from './Comic';


export default class Comics extends React.Component {
  render () {
    return (
        <div style={comicsStyle}>
          <Comic />
        </div>
      )
  }
}

var comicsStyle = {
  margin: '0 auto 0 auto',
}