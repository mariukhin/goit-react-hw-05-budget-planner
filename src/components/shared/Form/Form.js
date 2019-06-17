import React from 'react';
import styles from './Form.module.css';

const Form = ({ onSubmit = () => null, children }) => (
  <form className={styles.form} onSubmit={onSubmit}>
    {children}
  </form>
);

export default Form;
