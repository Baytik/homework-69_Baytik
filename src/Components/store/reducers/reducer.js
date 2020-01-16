import {ADD_PRODUCT, REMOVE_PRODUCT} from "../actions/actionTypes";

const initialState = {
    products: {
        pen: 0,
        pencil: 0,
    },
    totalPrice: 0,
};

const PRODUCT_PRICES = {
  pen: 20,
  pencil: 10,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {...state,
                products: {
                ...state.products,
                    [action.productName]: state.products[action.productName] + 1,
                },
                totalPrice: state.totalPrice + PRODUCT_PRICES[action.productName],
            };
        case REMOVE_PRODUCT:
            if (state.products[action.productName] === 0) {
                return state;
            }
            return {...state,
                products: {
                    ...state.products,
                    [action.productName]: state.products[action.productName] - 1,
                },
                totalPrice: state.totalPrice - PRODUCT_PRICES[action.productName],
            };
        default:
            return state;
    }
};

export default reducer;