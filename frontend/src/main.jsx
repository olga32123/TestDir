import React, { PropTypes } from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import createStore from './reduxApp/create.jsx';

const getRoutes = require('./routes');

const Root = ({ store }) => (
    <Provider store={store}>
        <ReduxRouter>
          {getRoutes(store)}
        </ReduxRouter>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

window.onload = () => {
    const root = document.getElementById('app');
    try {
        const store = createStore();
        render((
            <Root store={store} />
        ), root);
    } catch (e) {
        const RedBox = require('redbox-react').default;
        render(<RedBox error={e} />, root);
    }
};
