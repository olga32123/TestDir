import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { reducer as productList } from './productList';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
	form: formReducer,
	productList,
    router: routerStateReducer,
});
