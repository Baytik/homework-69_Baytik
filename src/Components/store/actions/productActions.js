import {ADD_PRODUCT, REMOVE_PRODUCT} from "./actionTypes";

export const addProduct = productName => ({type: ADD_PRODUCT, productName});
export const removeProduct = productName => ({type: REMOVE_PRODUCT, productName});