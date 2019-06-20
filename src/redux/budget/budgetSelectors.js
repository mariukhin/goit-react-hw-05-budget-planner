import { calculateBalance } from '../../services/helper';
import { getCalculatedExpenses } from '../expense/expenseSelectors';

export const getBudget = state => state.budget;

export const getCalculatedBalance = state => {
  const budget = getBudget(state);
  return calculateBalance(budget, getCalculatedExpenses(state));
};
