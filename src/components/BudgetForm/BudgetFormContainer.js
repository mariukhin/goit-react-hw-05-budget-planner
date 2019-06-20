import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
// import withRenderLog from '../hoc/withRenderLog';
import * as budgetActions from '../../redux/budget/budgetActions';

const mapDispatchToProps = dispatch => ({
  onSave: value => dispatch(budgetActions.saveBudget(value)),
});
console.log(mapDispatchToProps);

export default connect(
  null,
  mapDispatchToProps,
)(BudgetForm);
