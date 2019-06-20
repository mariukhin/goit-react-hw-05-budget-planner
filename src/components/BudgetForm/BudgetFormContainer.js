import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
// import withRenderLog from '../hoc/withRenderLog';
import * as budgetFormActions from '../../redux/budget/budgetFormActions';

const mapDispatchToProps = dispatch => ({
  onSave: value => dispatch(budgetFormActions.changeBudget(value)),
});

export default connect(
  null,
  mapDispatchToProps,
)(BudgetForm);
