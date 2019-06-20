export const ActionType = {
  SAVE_BUDGET: 'SAVE_BUDGET',
};
export const saveBudget = budget => ({
  type: ActionType.SAVE_BUDGET,
  payload: budget,
});
