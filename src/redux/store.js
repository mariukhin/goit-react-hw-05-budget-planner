import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import budgetFormReducer from './budget/budgetFormReducer';
// import timerReducer from './timer/timerReducer';
// import postsReducer from './posts/postsReducer';

// const rootReducer = combineReducers({
//   timer: timerReducer,
//   posts: postsReducer,
// });
const store = createStore(budgetFormReducer, devToolsEnhancer());

export default store;
