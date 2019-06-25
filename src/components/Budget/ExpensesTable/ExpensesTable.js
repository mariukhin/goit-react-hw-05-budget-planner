import React from 'react';
import PropTypes from 'prop-types';
import styles from './ExpensesTable.module.css';
import Button from '../../common/Button/Button';

const ExpensesTable = ({ expenses = [], deleteExpense }) =>
  expenses.length > 0 && (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Expense name</th>
          <th>Expense amount</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {expenses.map(({ id, name, amount }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{amount}</td>
            <td>
              <Button label="Delete" onClick={() => deleteExpense(id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

ExpensesTable.propTypes = {
  deleteExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      amount: PropTypes.number,
    }),
  ).isRequired,
};

export default ExpensesTable;
