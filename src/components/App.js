import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './appstyles.module.css';
import BudgetForm from './BudgetForm/BudgetForm';
import ExpenseForm from './ExpenseForm/ExpenseForm';
// import ExpensesTable from './ExpensesTable/ExpensesTable';
import Values from './Values/Values';
import * as budgetSelectors from '../redux/budget/budgetSelectors';
import * as expenseSelectors from '../redux/expense/expenseSelectors';

const calculateTotalExpenses = expenses =>
  expenses.reduce((total, expense) => (total += expense.amount), 0);
const calculateBalance = (budget, expenses) => budget - expenses;

const App = ({ budget, expenses }) => (
  <div className={styles.container}>
    <BudgetForm />
    <Values
      budget={budget}
      expenses={calculateTotalExpenses(expenses)}
      balance={calculateBalance(budget, expenses)}
    />
    <ExpenseForm />
    {/* {expenses.length > 0 && (
      <ExpensesTable items={expenses} onRemove={this.removeExpense} />
    )} */}
  </div>
);
App.propTypes = {
  budget: PropTypes.number,
  expenses: PropTypes.arrayOf(PropTypes.object),
};

App.defaultProps = {
  budget: 0,
  expenses: [],
};

const mapStateToProps = state => ({
  budget: budgetSelectors.getBudget(state),
  expenses: expenseSelectors.getExpenses(state),
});

export default connect(
  mapStateToProps,
  null,
)(App);
// export default class App extends Component {
//   state = {
//     budget: 0,
//     expenses: [],
//   };

//   // saveBudget = value => {
//   //   this.setState({ budget: value });
//   // };

//   addExpense = ({ name, amount }) => {
//     const expense = {
//       id: shortid.generate(),
//       name,
//       amount: Number(amount),
//     };

//     this.setState(state => ({
//       expenses: [expense, ...state.expenses],
//     }));
//   };

//   removeExpense = id => {
//     this.setState(state => ({
//       expenses: state.expenses.filter(expense => expense.id !== id),
//     }));
//   };

//   render() {
//     const { expenses, budget } = this.state;
//     const totalExpenses = calculateTotalExpenses(expenses);
//     const balance = calculateBalance(budget, totalExpenses);

//     return (
//       <div className={styles.container}>
//         <BudgetForm />
//         {/* <Values budget={budget} expenses={totalExpenses} balance={balance} />
//         <ExpenseForm onSave={this.addExpense} />
//         {expenses.length > 0 && (
//           <ExpensesTable items={expenses} onRemove={this.removeExpense} />
//         )} */}
//       </div>
//     );
//   }
// }
