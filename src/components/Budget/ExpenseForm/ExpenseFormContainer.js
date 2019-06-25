import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import * as expenseActions from '../../../redux/expense/expenseActionCreators';
import * as budgetSelectors from '../../../redux/budget/budgetSelectors';

const mapStateToProps = state => ({
  budget: budgetSelectors.getBudget(state),
});

const mapDispatchToProps = dispatch => ({
  addExpense: (name, amount) =>
    dispatch(expenseActions.addExpense(name, amount)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpenseForm);
