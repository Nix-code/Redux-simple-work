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
  
