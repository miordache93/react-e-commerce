import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productsReducer from './productsReducer';
import selectedProductReducer from './selectedProductReducer';
import cartReducer from './cartReducer';
import filtersReducer from './filtersReducer';

export default combineReducers({
    auth: authReducer,
    products: productsReducer,
    selectedProduct: selectedProductReducer,
    cartItems: cartReducer,
    filters: filtersReducer
});

