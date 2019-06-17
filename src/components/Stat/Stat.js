import React from 'react';
import styles from './Stat.module.css';

const Stat = ({ label, value }) => (
  <div className={styles.container}>
    <p className={styles.label}>{label}</p>
    <p className={styles.value}>{value}&nbsp;&#x24;</p>
  </div>
);

export default Stat;
