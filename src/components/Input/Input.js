import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = ({ type, value, onChange, name }) => (
  <input
    className={styles.input}
    type={type}
    value={value}
    onChange={onChange}
    name={name}
  />
);
Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
};

Input.defaultProps = {
  name: '',
};
export default Input;
