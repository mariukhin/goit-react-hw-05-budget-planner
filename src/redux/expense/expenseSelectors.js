import { calculateTotalExpenses } from '../../services/helper';

export const getExpenses = state => state.expenses;

export const getCalculatedExpenses = state => {
  const expenses = getExpenses(state);
  return calculateTotalExpenses(expenses);
};

export const fkkkkkf = () => null;
