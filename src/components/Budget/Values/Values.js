import React from 'react';
import PropTypes from 'prop-types';
import styles from './Values.module.css';
import Stat from '../Stat/Stat';

const Values = ({ budget, expenses, balance }) => (
  <section className={styles.section}>
    <Stat label="Budget" value={budget} isPositive />
    <Stat label="Expenses" value={expenses} />
    <Stat label="Balance" value={balance} isPositive={balance >= 0} />
  </section>
);

Values.propTypes = {
  budget: PropTypes.number,
  expenses: PropTypes.number,
  balance: PropTypes.number,
};
Values.defaultProps = {
  budget: 0,
  expenses: 0,
  balance: 0,
};
export default Values;
