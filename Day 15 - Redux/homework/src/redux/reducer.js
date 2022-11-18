import { combineReducers } from "redux"
import { ADD_TO_CART_SUCCESS, FETCH_PRODUCT_SUCCESS } from "./ActionConstant"

const initState = {
    productList: [],
    cart: []
}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                productList: [...action.payload]
            }
        case ADD_TO_CART_SUCCESS:
            // find the index of the product in the state cart
            const indexDuplicatedProduct = state.cart.findIndex(e => e.id == action.payload.id)
            // check if the product already exists
            if (indexDuplicatedProduct < 0) {
                // if the product not exists, assign count = 1
                let newProduct = action.payload;
                newProduct.count = 1;
                state.cart.push(newProduct)
            }else{
                // if the product exists, just update the count
                state.cart[indexDuplicatedProduct].count += 1
            }
            
            return {
                ...state,
                cart: [...state.cart]
            }
        default: return state
    }
}

const rootReducer = combineReducers({
    myReducer: reducer
})

export default rootReducer;