import React, { Component, useState } from 'react';
import Request from '../../components/Request/Request';
import Display from '../../components/Display/Display';
import { fetchRequest } from  '../../fetchRequest';

const Resty = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [jsonBody, setJSONBody] = useState('');
  const [response, setResponse] = useState({});

  const handleUrlChange = ({ target }) => setUrl(target.value);
  const handleInputChange = ({ target }) => setMethod(target.value);
  const handleJSONBodyChange = ({ target }) => setJSONBody(target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchRequest(url, method, jsonBody)
      .then(res => setResponse(JSON.stringify(res)));
  };

  return (
    <>
      <Request/>
      <Display onSubmit={handleSubmit}
        url={url}
        onURLChange={handleUrlChange}
        method={method}
        onInputChange={handleInputChange}
        jsonBody={jsonBody}
        onJsonBodyChange={handleJSONBodyChange}/>
    </>
  );
};

export default Resty;

