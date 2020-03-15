import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import combinedReducers from 'store/reducers';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = {
    ...createStore(
        combinedReducers,
        composeWithDevTools(applyMiddleware(...middleware))
    ),
    runSaga: sagaMiddleware.run
};

export default store;
