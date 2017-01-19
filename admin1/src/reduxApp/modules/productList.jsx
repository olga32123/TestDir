const initState = {
	productList: [
		
	],
};
import http from 'utils/http';
export const reducer = (state = initState, action) => {
	switch (action.type) {
		case 'LOAD_PRODUCTS': {
			return { ...state, productList: action.payload }
		}
		default :
            return state;
            
	}
}

export const loadProducts = () => (dispatch, getState) => {
	http.get('/api/products').then((products) => {
		dispatch({type: 'LOAD_PRODUCTS', payload: products})
	})
	
}

export const createProduct = (data) => (dispatch, getState) => {
	http.post('/api/products', data).then(() => {
		dispatch(loadProducts());
	})
	
}


