import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ action, type, title }) => {

  return (
    <div className="btn btn-content" onClick={action}>
      <span>{title}</span>
    </div>
  )
};

Button.propTypes = {
  action: PropTypes.func,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;