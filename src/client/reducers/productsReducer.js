import { FETCH_PRODUCTS, FETCH_PRODUCT_BY_ID } from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return action.payload.data;
        default:
            return state;
    }
}