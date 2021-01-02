import { ADD_PROD_TO_CART } from '../actions';

export default (state = null, action) => {
    switch (action.type) {
        case ADD_PROD_TO_CART:
            return action.payload.data || false;
        default:
            return state;
    }
}