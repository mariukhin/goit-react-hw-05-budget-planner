import React from 'react';
import styles from './ExpensesTable.module.css';
import Button from '../shared/Button/Button';

const ExpensesTable = ({ items = [], onRemove }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th>Expense name</th>
        <th>Expense amount</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, name, amount }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>{amount}</td>
          <td>
            <Button label="Delete" onClick={() => onRemove(id)} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ExpensesTable;
