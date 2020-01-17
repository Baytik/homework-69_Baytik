import {
    ADD_PRODUCT,
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    REMOVE_PRODUCT
} from "./actionTypes";
import axiosAPI from "../../axiosAPI";

export const addProduct = productName => ({type: ADD_PRODUCT, productName});
export const removeProduct = productName => ({type: REMOVE_PRODUCT, productName});

export const fetchProductsRequest = () => {
    return {type: FETCH_PRODUCTS_REQUEST}
};

export const fetchProductsSuccess = products => {
    return {type: FETCH_PRODUCTS_SUCCESS, products}
};

export const fetchProductsError = error => {
    return {type: FETCH_PRODUCTS_ERROR, error}
};

export const getProducts = () => {
    return dispatch => {
        dispatch(fetchProductsRequest());
        axiosAPI.get('.json').then(response => {
            dispatch(fetchProductsSuccess(response.data));
        }, error => {
            dispatch(fetchProductsError(error))
        })
    }
};