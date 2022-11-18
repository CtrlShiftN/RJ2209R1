import axios from "axios";
import { ADD_TO_CART_SUCCESS, FETCH_PRODUCT_SUCCESS } from "./ActionConstant";

export const getAllProduct = () => {
    return async dispatch => {
        const response = await axios.get("http://localhost:3001/products");
        dispatch({
            type: FETCH_PRODUCT_SUCCESS,
            payload: response.data
        });
    };
}

export const addToCart = product => {
    return async dispatch => {
        dispatch({
            type: ADD_TO_CART_SUCCESS,
            payload: product
        });
    };
}