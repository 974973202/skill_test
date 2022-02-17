import createSageMiddleware from 'redux-saga'
import reducer from './reduer';
import saga from './sagas'

import { createStore, applyMiddleware } from 'redux'

const sagaMiddleware = createSageMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga)

export default store;

