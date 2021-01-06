const path = "/.netlify/functions"

export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';
export const FETCH_PRODUCT_BY_ID = 'FETCH_PRODUCT_BY_ID';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const ADD_PROD_TO_CART = 'ADD_PROD_TO_CART';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';

import { urlParser } from './../../helpers/urlParser';

export const createUser = (data) => async (dispatch, getState, api) => {
    await api.post(`${path}/users-create`, {
        body: {
            username: data.username || 'mihai',
            password: data.password || 'test123'
        }
    }, err => {
        console.log(err);
    });
};

export const fetchCurrentUser = (username) => async (dispatch, getState, api) => {
    api.defaults.headers.common['Authorization'] = 'Basic bWloYWk6dGVzdDEyMw==';

    const res = await api.get(`${path}/users-get/${username}`);

    if (res) {
        window.localStorage.setItem('authenticated', true);
    }

    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res
    });
};

export const fetchProducts = (queryParams) => async (dispatch, getState, api) => {
    let products_url = `${path}/products`;
    const URL = `${products_url}?${urlParser(queryParams)}`;
    const res = await api.get(encodeURI(URL).slice(0, -1));

    if (res.data.products) {
        dispatch({
            type: FETCH_PRODUCTS,
            payload: { data: res.data.products }
        });
    } else {
        dispatch({
            type: FETCH_PRODUCTS,
            payload: { data: [] }
        });
    }

};

export const fetchProductById = (id) => async (dispatch, getState, api) => {
    const res = await api.get(`${path}/products/${id}`);
    console.log('ID \n', id);
    dispatch({
        type: FETCH_PRODUCT_BY_ID,
        payload: { data: res.data }
    });
};

export const filterProducts = (filter) => async (dispatch, getState, api) => {
    dispatch({
        type: FILTER_PRODUCTS,
        payload: { data: filter }
    });
};