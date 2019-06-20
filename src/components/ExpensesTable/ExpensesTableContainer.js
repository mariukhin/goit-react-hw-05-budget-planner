import { connect } from 'react-redux';
import ExpensesTable from './ExpensesTable';
import * as expenseActions from '../../redux/expense/expenseActions';
import * as expenseSelectors from '../../redux/expense/expenseSelectors';

const mapStateToProps = state => ({
  expenses: expenseSelectors.getExpenses(state),
});

const mapDispatchToProps = dispatch => ({
  deleteExpense: id => dispatch(expenseActions.deleteExpense(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpensesTable);
