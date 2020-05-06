import React from 'react';
import ReactJson from 'react-json-view';
import PropTypes from 'prop-types';


const Display = ({ response, headers }) => {
  return (
    <div className={Display}>
      <ReactJson src={headers} theme="tomorrow" name="Headers"/>
      <ReactJson src={response} theme="tomorrow" name="Response"/>
    </div>
  );
};
  
Display.propTypes = {
  headers: PropTypes.object,
  response: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
};
  
export default Display;
