import React from 'react';
import styles from './Input.module.css';

const Input = ({
  type = 'text',
  value = '',
  onChange = () => null,
  name = '',
}) => (
  <input
    className={styles.input}
    type={type}
    value={value}
    onChange={onChange}
    name={name}
  />
);

export default Input;
