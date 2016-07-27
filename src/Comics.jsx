import React from 'react';
import Title from './Title.jsx';
import Poster from './Poster.jsx';
import Desciption from './Description.jsx';

export default class Comics extends React.Component {
  render () {
    return (
        <div>
          <h1>Hi There From the Comics</h1>
          <Title />
          <Poster />
          <Desciption />
        </div>
      )
  }
}