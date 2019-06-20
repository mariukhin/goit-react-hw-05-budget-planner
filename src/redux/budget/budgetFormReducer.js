import { ActionType } from './budgetFormActions';

const budgetReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case ActionType.CHANGE_BUDGET:
      return payload;
    default:
      return state;
  }
};
export default budgetReducer;
