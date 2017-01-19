import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { reducer as productList } from './productList';

export default combineReducers({
	productList,
    router: routerStateReducer,
});
