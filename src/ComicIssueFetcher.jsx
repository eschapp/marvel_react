import React, {Component} from 'react';
import Comic from './Comic.jsx';
import md5 from "md5";



function fetchJSON(url) {
  return fetch(url).then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.indexOf("application/json") !== -1) {
      return response.json();
    } else {
      console.log("Oops, we haven't got JSON!");
    }
  });
}

function marvelFactory(config) {
  return function(path) {
    var timestamp = new Date().getTime();
    var hash = md5(timestamp + config.privateKey + config.publicKey);
    var url = config.hostname + '/v' + config.version + '/public' + path + '?format=comic&formatType=comic&noVariants=true&dateDescriptor=thisMonth&orderBy=onsaleDate&limit=100&apikey=' + config.publicKey + '&ts=' + timestamp + '&hash=' + hash;
    console.log(url);

    return fetchJSON(url);
  }
}

// Get an instance of the marvel api
var marvel = marvelFactory({
  hostname: 'http://gateway.marvel.com',
  publicKey: 'c5ebb123335240358c2744cde0f38b7e',
  privateKey: 'cff3343714de139da0173348487355979eda8406',
  version: '1'
});

export default class ComicIssueFetcher extends Component {
  constructor(props) {
    super(props);
    this.state={
      media: []
    }
    console.log("Props", props);
    this.fetchComics();
  }

  fetchComics(){
    marvel('/comics').then((response) => {
      if (response && response.status === "Ok") {

        this.setState({media: response.data.results});
        ///media comes back with response data in an array
        console.log(this.state.media);
      } else if (response && response.Response === "False") {
        // nothing found
      } else {
        console.error('Unknown error.');
        // trouble connecting to Marvel API
      }
    });
  }


  render () {
    return (
        <div style={fetcherStyle}>
          <h1 style={issueTitleStyle}>Marvel's Latest Comic Book Issues:</h1>
          <Comic media={this.state.media}/>
        </div>
      )
  }
}

var fetcherStyle = {
  background: 'goldenrod',
  margin: '0px',
  padding: '0 0 0 20px'
}

var issueTitleStyle ={
  color: '#fff',
  display: 'block',
  fontSize: '40px',
  margin: '0 auto',
  paddingTop: '20px',
  textAlign: 'center',
  textDecoration: 'underline',
  textShadow:'-3px -1px 0 #891100, 1px -1px 0 #891100, -1px 1px 0 #891100, 1px 1px 0 #891100'
}

