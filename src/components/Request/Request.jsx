import React from 'react';
import PropTypes from 'prop-types';
import styles from './Request.css';

const RadioButtonGroup = ({ name, onChange, children }) => {
  const radioButtonsWithNameAndOnChange = React.Children.map(children, child => {
    return React.cloneElement(child, {
      name,
      onChange
    });
    
  });
  return (
    <>
      { radioButtonsWithNameAndOnChange }
    </>
  );
};

const RadioButton = ({ name, value, onChange }) => (
  <>
    <input id={value} type="radio" name={name} value={value} onChange={onChange} />
    <label htmlFor={value}>{value}</label>
  </>
);

const Request = ({ url, onUrlChange, body, onBodyChange, onMethodChange, onSubmit }) => (
  <form className={styles.Request} nonSubmit={onSubmit} >
    <input type="text" value={url} onChange={onUrlChange} />

    

    <RadioButtonGroup name="method" onChange={onMethodChange}>
      <RadioButton value="POST" />
      <RadioButton value ="GET"  />
      <RadioButton  value ="PATCH"  />
      <RadioButton  value ="PUT" />
      <RadioButton  value ="DELETE" />

    </RadioButtonGroup>
    

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
