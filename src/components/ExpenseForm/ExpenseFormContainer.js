import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
// import withRenderLog from '../hoc/withRenderLog';
import * as expenseActions from '../../redux/expense/expenseActions';

const mapDispatchToProps = dispatch => ({
  addExpense: (name, amount) =>
    dispatch(expenseActions.addExpense(name, amount)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ExpenseForm);
