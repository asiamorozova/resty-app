import React, { Component } from 'react';
import Request from '../../components/Request/Request';

export default class Resty extends Component {
    state = {
      url: '',
      method: 'POST',
      body: null
    }

    handleUrlChange = () => {}
    handleMethodChange = () => {}
    handleBodyChange = () => {}

    handleSubmit = () => {
        .then(response => )
    }

    render() {
      const { url, method, body } = this.state;
      return (
        <>
          <Request url={url} method={method} body={body} onSubmit={this.handleSubmit}/>
        </>
      );

    }
}
