import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class MediaFetcher extends React.Component {
  render () {
    return (
        <div>
          <h1>Hi There From the Fetcher</h1>
          <img src="/images/fetcher101_hdr.gif" />
        </div>
      )
  }
}