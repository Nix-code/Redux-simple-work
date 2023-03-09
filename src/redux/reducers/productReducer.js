// We will create reducer here
// reducer always takes initial state and the action
import { ActionTypes } from "../constants/action-types"
const initialState = {
    products: [{
        // create object
        id: 1,
        title: "Potato",
        category: "Learner"
    }]
}
// destructuring the action
export const productReducer = (state, {type, payload}) => {

    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}
