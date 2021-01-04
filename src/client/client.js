import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers'
import { renderRoutes } from 'react-router-config';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

const authState = JSON.parse(window.localStorage.getItem('authenticated'));

if (authState) {
    axiosInstance.defaults.headers.common['Authorization'] = 'Basic bWloYWk6dGVzdDEyMw==';
}
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

const state = {
    ...window.INITIAL_STATE, auth: true,
    cartItems
};

const store = createStore(
    reducers,
    state,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);