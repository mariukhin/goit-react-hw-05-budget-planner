import shortId from 'shortid';
import { ActionType } from './expenseActions';

export const addExpense = (name, amount) => ({
  type: ActionType.ADD_EXPENSE,
  payload: {
    id: shortId.generate(),
    name,
    amount: Number(amount),
  },
});
export const deleteExpense = id => ({
  type: ActionType.DELETE_EXPENSE,
  payload: id,
});
