import React from 'react';
import PropTypes from 'prop-types';

const Request = ({ url, onUrlChange, body, onBodyChange, onMethodChange, onSubmit }) => (
  <form nonSubmit={onSubmit} >
    <input type="text" value={url} onChange={onUrlChange} />
    <label>
            POST:
      <input type="radio" name="method" value="POST" onChange={onMethodChange} />
    </label>
    <label>
            GET:
      <input type="radio" name="method" value="GET" onChange={onMethodChange} />
    </label>
    <label>
            PATCH:
      <input type="radio" name="method" value="PATCH" onChange={onMethodChange} />
    </label>
    <label>
            PUT:
      <input type="radio" name="method" value="PUT" onChange={onMethodChange} />
    </label>
    <label>
            DELETE:
      <input type="radio" name="method" value="DELETE" onChange={onMethodChange} />
    </label>
    <textarea value ={body} onChange={onBodyChange}></textarea>
    <button>Submit</button>
  </form>
);

Request.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.object.isRequired,
  onUrlChange: PropTypes.func.isRequired,
  onMethodChange: PropTypes.func.isRequired, 
  onBodyChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Request; 
