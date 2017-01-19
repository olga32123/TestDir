import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';;
import AddForm from './components/AddForm';
class ProductList extends React.Component {
	componentDidMount() {
		this.props.loadProducts();
	}

	render() {
		const {
			ProductList,
			createProduct,
		} = this.props;
		const products = ProductList.map((product) => {
		return (<tr key={product.id}>{product.title}>
			<td>{product.id}</td>
			<td>{product.title}</td>
			<td>{product.description}</td>
		</tr>);
		});
			return(
				<div>  Hello
				<AddForm onSubmit={(data) => createProduct(data)} />
					<Table striped bordered condensed hover>
						<thead>
							<tr>
								<th>#</th>
								<th>Title</th>
								<th>Description</th>
							</tr>
						</thead>
						<tbody>
							{products}
						</tbody>
					</Table>
			</div>
		);
	}
}

import { loadProducts, createProduct } from 'reduxApp/modules/productList';

export default connect(
    state => ({
			ProductList: state.productList.productList,
    }),
   { loadProducts, createProduct },
)(ProductList);
