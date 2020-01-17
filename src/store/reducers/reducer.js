import {FETCH_PRODUCTS_SUCCESS, REMOVE_PRODUCT} from "../actions/actionTypes";

const initialState = {
    products: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return {...state, products: action.products};
        /*case REMOVE_PRODUCT:
            if (state.products[action.productName] === 0) {
                return state;
            }
            return {...state,
                products: {
                    ...state.products,
                    [action.productName]: state.products[action.productName] - 1,
                },
            };*/
        default:
            return state;
    }
};

export default reducer;