import React from 'react';

import { connect } from 'react-redux';
import { Button } from 'components/ProductList';

const ProductList = ({ ProductList, loadProducts }) => {
	const products = ProductList.map((product) => {
		return <div>{product.name}</div>
	})
    return (
		<div>  Hello
			<Button onClick={() => loadProducts()}> save </Button>
			<div>{products}</div>
		</div>
	)
}

import { loadProducts } from 'reduxApp/modules/productList';

export default connect(
    state => ({

    	ProductList: state.productList.productList,
    }),
   { loadProducts},
)(ProductList);