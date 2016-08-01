import React, {Component} from 'react';
import Name from './Name.jsx';
import Poster from './Poster.jsx';
import Description from './Description.jsx';

var contentStyle={
  borderBottom: '5px black dotted',
  display: 'inline-block',
  height: '700px',
  marginBottom: '10px',
  maxWidth: '200px',
  overflow: 'hidden'
}


export default class Character extends React.Component {
  render () {
    return (
        <div>
          {this.props.media.map(function(char) {
          return (
            <div className={'char-container'} style={contentStyle}>
            <Name name={char.name} />
            <Poster img={char.thumbnail.path + '.' + char.thumbnail.extension} />
            <Description description={char.description} />
            </div>
            )
        })}
        </div>
      )
  }
}