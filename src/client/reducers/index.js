import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productsReducer from './productsReducer';
import selectedProductReducer from './selectedProductReducer';

export default combineReducers({
    auth: authReducer,
    products: productsReducer,
    selectedProduct: selectedProductReducer
});

