import React from 'react';
import { Router, Route, IndexRoute} from 'react-router';
import ProductList from 'containers/ProductList';


module.exports = ({ dispatch, getState }) => (
    <div>
        <Router>
            <Route path='/' >
            		<IndexRoute component={ProductList} />
                    <Route component={ProductList} path='products' />
            </Route>
        </Router>
    </div>
);
