import './style.css';
import React from 'react';
import p from 'prop-types';

export const Button = ({ onClick, disabled, text }) => (
  <button onClick={onClick} disabled={disabled} className="btn">
    {text}
  </button>
);

Button.defaultProps ={
  disabled: false
}
Button.propTypes = {
  onClick: p.func.isRequired,
  disabled: p.bool,
  text: p.string.isRequired,
};
