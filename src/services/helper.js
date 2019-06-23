/*eslint-disable*/
export const calculateTotalExpenses = expenses =>
  expenses.reduce((total, expense) => (total += expense.amount), 0);
export const calculateBalance = (budget, expenses) => budget - expenses;
export const checkNumber = number => number > 0;
