import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import * as budgetActions from '../../redux/budget/budgetActions';

const mapDispatchToProps = dispatch => ({
  saveBudget: budget => dispatch(budgetActions.saveBudget(budget)),
});

export default connect(
  null,
  mapDispatchToProps,
)(BudgetForm);
