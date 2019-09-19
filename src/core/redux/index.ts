import { createStore, combineReducers, Store } from 'redux';
import {} from 'redux-devtools-extension';
import MainReducer from './Main/state';

const combineReducer = combineReducers({
  MainReducer,
});

const store: Store = createStore(
  combineReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
