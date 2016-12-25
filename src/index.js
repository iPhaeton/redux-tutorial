import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from "redux-saga";

import reducers from './reducers';
import { Router, browserHistory } from "react-router";
import routes from "./routes";
import fetchPostsSaga from "./sagas/fetchPostsSaga";
import createPostSaga from "./sagas/createPostSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

//sagaMiddleware.run(fetchPostsSaga);
sagaMiddleware.run(createPostSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));