import {createStore, applyMiddleware, compose} from 'redux';
import createLoggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import reducers from 'reducers/root.jsx';
import initialState from 'store/initialState.jsx';

const middlewares = [createLoggerMiddleware(), thunkMiddleware];

const functionsList = [
	applyMiddleware(...middlewares),
	window.devToolsExtension ? window.devToolsExtension() : f => f
];

const store = createStore(reducers, initialState, compose(...functionsList));

export default store;
