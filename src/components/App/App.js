import React from 'react';
import { connect } from 'react-redux';
import styles from './appstyles.module.css';
import BudgetForm from '../BudgetForm/BudgetFormContainer';
import ExpenseForm from '../ExpenseForm/ExpenseFormContainer';
import ExpensesTable from '../ExpensesTable/ExpensesTableContainer';
import Values from '../Values/ValuesContainer';
import * as budgetSelectors from '../../redux/budget/budgetSelectors';
import * as expenseSelectors from '../../redux/expense/expenseSelectors';

const App = () => {
  return (
    <div className={styles.container}>
      <BudgetForm />
      <Values />
      <ExpenseForm />
      <ExpensesTable />
    </div>
  );
};
const mapStateToProps = state => ({
  budget: budgetSelectors.getBudget(state),
  expenses: expenseSelectors.getExpenses(state),
});

export default connect(
  mapStateToProps,
  null,
)(App);
