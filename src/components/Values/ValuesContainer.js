import { connect } from 'react-redux';
import Values from './Values';
import * as expenseSelectors from '../../redux/expense/expenseSelectors';
import * as budgetSelectors from '../../redux/budget/budgetSelectors';

const mapStateToProps = state => ({
  budget: budgetSelectors.getBudget(state),
  expenses: expenseSelectors.getCalculatedExpenses(state),
  balance: budgetSelectors.getCalculatedBalance(state),
});

export default connect(
  mapStateToProps,
  null,
)(Values);
