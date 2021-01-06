import { FILTER_PRODUCTS } from '../actions';

const initialState = {
    search: '',
    count: null,
    page: null
};
export default (state = initialState, action) => {
    switch (action.type) {
        case FILTER_PRODUCTS:
            return {...state, ...action.payload.data}
        default:
            return state;
    }
}