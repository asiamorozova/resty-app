import React from 'react';
import PropTypes from 'prop-types';
import styles from './Request.css';

const RadioButton = ({ name, value, onChange }) => (
  <>
    <input id={value} type="radio" name={name} value={value} onChange={onChange} />
    <label htmlFor={value}>{value}</label>
  </>
);

const Request = ({ url, onUrlChange, body, onBodyChange, onMethodChange, onSubmit }) => (
  <form className={styles.Request} nonSubmit={onSubmit} >
    <input type="text" value={url} onChange={onUrlChange} />

    <RadioButton name="method" value ="POST" onChange={onMethodChange} />
    <input id="POST" type="radio" name="method" value="POST" onChange={onMethodChange} />
    <label htmlFor="POST"> POST</label>

    <RadioButton name="method" value ="GET" onChange={onMethodChange} />
    <input id="GET" type="radio" name="method" value="GET" onChange={onMethodChange} />
    <label htmlFor="GET">GET</label>

    <RadioButton name="method" value ="PATCH" onChange={onMethodChange} />
    <input id="PATCH" type="radio" name="method" value="PATCH" onChange={onMethodChange} />    
    <label htmlFor="PATCH">PATCH</label>

    <RadioButton name="method" value ="PUT" onChange={onMethodChange} />
    <input id="PUT" type="radio" name="method" value="PUT" onChange={onMethodChange} />
    <label htmlFor="PUT">PUT</label>

    <RadioButton name="method" value ="DELETE" onChange={onMethodChange} />
    <input id="DELETE" type="radio" name="method" value="DELETE" onChange={onMethodChange} />
    <label htmlFor="DELETE">DELETE</label>

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
