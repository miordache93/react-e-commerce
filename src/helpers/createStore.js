import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';
import axios from 'axios';

export default (req) => {
    const axiosInstance = axios.create({
        baseURL: 'https://wekode-test.netlify.app/.netlify/functions/server',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    const store = createStore(reducers, {
        cartItems: []
    }, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

    return store;
};