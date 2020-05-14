import React from 'react';
import PropTypes from 'prop-types';

const History = ({ url, method }) => (
  <div>
    <p>{url}</p>
    <p>{method}</p>
  </div>
);
History.PropTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired
};

export default History;
