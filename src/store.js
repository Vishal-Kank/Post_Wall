import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer,initialState,applyMiddleware(...middleware));

export default store;

// redux thunk-> for writing action creators that returns 'function'  ,  instead of just plain actions
//applyMiddleware -> for providing a way to interact with actions that have been dispatched to the store before they reach the store's reducer
//uses of middle ware -> logging actions, reporting errors, making asynchronous requests, and dispatching new actions.