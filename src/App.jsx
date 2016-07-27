import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './Hero.jsx';
import Comic from './Comic.jsx';
import Footer from './Footer.jsx';


class App extends React.Component {
  render () {
    return (
      <div>
        <Hero />
        <Comic />
        <Footer />
      </div>
      )
  }
}

ReactDOM.render (
  <App />,
  document.getElementById('root')
)