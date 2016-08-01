import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import ComicIssueFetcher from './ComicIssueFetcher.jsx';
import CharacterFetcher from './CharacterFetcher.jsx';
import Footer from './Footer.jsx';
import Hello from './Hello.jsx';
import Hero from './Hero.jsx';
import NoMatch from './NoMatch.jsx';
import Home from './Home.jsx';
import globalStyles from "./assets/styles/global.css";


class App extends React.Component {
  render () {
    return (
      <div style={appStyle}>
        <Hero />
        <Hello>
          {this.props.children}</Hello>
        <Footer />
      </div>
      )
  }
}

var appStyle = {
  margin: '0px',
  padding: '0 auto',
}

ReactDOM.render (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute path="home" component={Home} />
        <Route path="home" component={Home} />
        <Route path="latestissues" component={ComicIssueFetcher} />
        <Route path="updatedcharacters" component={CharacterFetcher} />
      </Route>
      <Route path="*" component={NoMatch} />
    </Router>,
  document.getElementById('root')
)