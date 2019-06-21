import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import budgetReducer from './budget/budgetReducer';
import expenseReducer from './expense/expenseReducer';
import stateValidate from './middleware/stateValidation';

const rootReducer = combineReducers({
  budget: budgetReducer,
  expenses: expenseReducer,
});
const enhancer = applyMiddleware(stateValidate);
const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
