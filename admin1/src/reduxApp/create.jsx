import { reduxReactRouter } from 'redux-router';

import useScroll from 'scroll-behavior';
import { createHistory } from 'history';

import { applyMiddleware, compose, createStore as _createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules/reducer';

export default function createStore() {
    const middleware = applyMiddleware(thunk);

    const createHistoryCustom = (options) => useScroll(createHistory({
        queryKey: false, ...options,
    }));

    const createStoreWithMiddleware = compose(
        middleware,
        reduxReactRouter({ createHistory: createHistoryCustom })
    );

    const _store = createStoreWithMiddleware(_createStore)(rootReducer);

    return _store;
}