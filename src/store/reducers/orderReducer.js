import {ADD_PRODUCT} from "../actions/actionTypes";

const initialState = {
  orders: [],
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {...state,
                orders: {
                    ...state.orders,
                    [action.productName]: state.orders[action.productName] + 1,
                },
            };
        default:
            return state;
    }
};

export default orderReducer;