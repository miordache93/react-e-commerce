import { FETCH_PRODUCT_BY_ID } from '../actions';

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_BY_ID: 
            return action.payload.data;
        default:
            return state;
    }
}