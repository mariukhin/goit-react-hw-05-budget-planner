import shortId from 'shortid';

export const ActionType = {
  ADD_EXPENSE: 'ADD_EXPENSE',
};
export const addExpense = (name, amount) => ({
  type: ActionType.ADD_EXPENSE,
  payload: {
    id: shortId.generate(),
    name,
    amount: Number(amount),
  },
});
