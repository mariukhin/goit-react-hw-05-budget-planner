import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stat.module.css';

const Stat = ({ label, value, isPositive }) => {
  const divClasses = [styles.container];

  if (isPositive) {
    divClasses.push(styles.positive);
  }
  return (
    <div className={divClasses.join(' ')}>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}&nbsp;&#x24;</p>
    </div>
  );
};
Stat.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  isPositive: PropTypes.bool,
};
Stat.defaultProps = {
  isPositive: false,
};
export default Stat;
