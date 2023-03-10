// We will create reducer here
// reducer always takes initial state and the action
import { ActionTypes } from "../constants/action-types"
const initialState = {
    products: [{}],
};
// reducer takes initial action and state and returns new state
// destructuring the action
export const productReducer = (state = initialState, {type, payload}) => {

    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products:payload};
        default:
            return state;
    }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case ActionTypes.SELECTED_PRODUCTS:
        return { ...state, ...payload };
      case ActionTypes.REMOVE_SELECTED_PRODUCTS:
        return {};
      default:
        return state;
    }
  };
