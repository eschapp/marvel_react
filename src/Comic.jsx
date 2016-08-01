import React, {Component} from 'react';
import Title from './Title.jsx';
import Poster from './Poster.jsx';
import Description from './Description.jsx';


export default class Comic extends React.Component {
  render () {
    return (
        <div>
          {this.props.media.map(function(item) {
          return (
            <div className={'item-container'} style={contentStyle}>
            <Title title={item.title} />
            <Poster img={item.thumbnail.path + '.' + item.thumbnail.extension} />
            <Description description={item.description} />
            </div>
            )
        })}
        </div>
      )
  }
}

var contentStyle={
  borderBottom: '5px black dotted',
  display: 'inline-block',
  height: '900px',
  marginBottom: '10px',
  maxWidth: '300px',
  overflow: 'hidden',
  padding: '0 5px',
}