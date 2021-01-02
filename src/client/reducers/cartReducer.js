import { ADD_PROD_TO_CART } from '../actions';

export default (state = null, action) => {
    switch (action.type) {
        case ADD_PROD_TO_CART:
            return [...new Set([...state, action.payload.data])]
        default:
            return state;
    }
}