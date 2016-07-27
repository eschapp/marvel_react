import React from 'react';
import Comics from './Comics.jsx';

export default class Comic extends React.Component {
  render () {
    return (
        <div>
          <h1>Hi There From the Comic</h1>
          <Comics />
        </div>
      )
  }
}