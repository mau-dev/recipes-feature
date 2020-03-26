import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

//all of the initial state will be in the reducers
const initialState = {};

const middleware = [ thunk ];

//creating the store, bringing redux-thunk as middleware and the redux-dev-tools as enchancer
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
