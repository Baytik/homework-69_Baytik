import {ADD_PRODUCT} from "../actions/actionTypes";

const initialState = {
  orders: [],
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {...state,
                orders: action.productName,
            };
        default:
            return state;
    }
};

export default orderReducer;