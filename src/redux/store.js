import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import budgetReducer from './budget/budgetReducer';
import expenseReducer from './expense/expenseReducer';

const rootReducer = combineReducers({
  budget: budgetReducer,
  expenses: expenseReducer,
});
const store = createStore(rootReducer, devToolsEnhancer());

export default store;
