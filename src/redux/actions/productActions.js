// this will contain our action
// we create three actions here
// - SET_PRODUCTS
// - SELECTED_PRODUCTS
// - REMOVE_SELECTED_PRODUCTS
import { ActionTypes } from "../constants/action-types"
export const setProducts = (products) => {
    // action always returns Plain JS object
    // which has one key and other payload
    return {
        // key will be type
        // type will be the type of the action
        // you want to perform
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
        // payload value is product which is the data we want to get it
    }
}

export const selectedProducts = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: products,
    }
}

