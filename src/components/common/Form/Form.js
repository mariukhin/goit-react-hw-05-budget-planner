import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

const Form = ({ onSubmit = () => null, children }) => (
  <form className={styles.form} onSubmit={onSubmit}>
    {children}
  </form>
);
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
export default Form;
