import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// store.dispatch({ type: 'account/deposit', payload: 500 });
// store.dispatch({ type: 'account/withdraw', payload: 200 });
// console.log(store.getState());

// store.dispatch({
//   type: 'account/requestLoan',
//   payload: { amount: 1000, purpose: 'By a car' },
// });

// console.log(store.getState());

// store.dispatch({ type: 'account/payLoan' });
// console.log(store.getState());

// store.dispatch(deposit(500));
// console.log(store.getState());

// store.dispatch(requestLoan(1000, 'Buy a cheap car'));
// console.log(store.getState());

// store.dispatch(createCustomer('Akmal Rizayev', '55555'));
// console.log(store.getState());
