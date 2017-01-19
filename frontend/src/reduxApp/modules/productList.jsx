const initState = {
	productList: [
		
	],
};


const products = [

		{
			id: 3,
			name: 'Product3',
			description: 'Ogólnie znana  Jedną z mocnych stron używania',
		},
		{
			id: 4,
			name: 'Product4',
			description: 'Ogólnie znana  Jedną z mocnych stron używania',
		},


];

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
	dispatch({type: 'LOAD_PRODUCTS', payload: products})
}


