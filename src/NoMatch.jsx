import React, { Component } from 'react';
import Hero from './Hero.jsx';
import Footer from './Footer.jsx';

export default class NoMatch extends Component {
  render() {
    return (
      <div style={noMatchStyle}>
        <Hero />
        <h1>Zing!</h1>
        <img style={{width: '50%'}} src="./images/marvel_fight.jpg" alt="fail" />
        <div>We couldn't find what you were looking for. You probably want to <a href="/">start over</a>.</div>
        <Footer />
      </div>
    );
  }
}

var noMatchStyle = {
  display: 'block',
  margin: '0 auto',
  textAlign: 'center',
}
