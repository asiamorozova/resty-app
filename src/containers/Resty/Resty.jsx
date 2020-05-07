import React, { useState } from 'react';
import Request from '../../components/Request/Request';


const Resty = () => {
  const [method, setMethod] = useState('');
  const [url, setUrl] = useState('');
  const [textBody, setTextBody] = useState('');

  const handleChange = ({ target }) => {
    if(target.name === 'method') setMethod(target.value);
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'textBody') setTextBody(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <Request
      url={url} 
      textBody={textBody} 
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );

};

export default Resty;
