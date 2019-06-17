import React from 'react';
import styles from './Values.module.css';
import Stat from '../Stat/Stat';

const Values = ({ budget, expenses, balance }) => (
  <section className={styles.container}>
    <Stat label="Budget" value={budget} isPositive />
    <Stat label="Expenses" value={expenses} />
    <Stat label="Balance" value={balance} isPositive={balance >= 0} />
  </section>
);

export default Values;
