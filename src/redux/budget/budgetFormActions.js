export const ActionType = {
  CHANGE_BUDGET: 'CHANGE_BUDGET',
};
export const changeBudget = budget => ({
  type: ActionType.CHANGE_BUDGET,
  payload: budget,
});
