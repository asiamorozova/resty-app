import React, { useState } from 'react';
import Request from '../../components/Request/Request';
import { fetchRequest } from '../../fetchRequest';
import Response from '../../components/Response/Response';
import HistoryList from '../../components/Response/Response';

const Resty = () => {
  const [method, setMethod] = useState('');
  const [url, setUrl] = useState('');
  const [textBody, setTextBody] = useState('');
  const [response, setResponse] = useState([]);
  const [history, setHistory] = useState([]);

  const handleChange = ({ target }) => {
    if(target.name === 'method') setMethod(target.value);
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'textBody') setTextBody(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchRequest(url, method, textBody)
      .then(json => {
        setResponse(json);
        setHistory(preHistory => [{ url, method }, ...preHistory]);
      }); 
  };

  return (
    <>
      <HistoryList history={history} />
      <Form
        url={url} 
        textBody={textBody} 
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Response response={response} />
    </>
  );
};

export default Resty;
