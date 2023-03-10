// sometimes we may have many reducer functions together
// we need to combine all those reducers in a index.js
// combineReducer is inside redux
import { combineReducers } from "redux";
import { productReducer , selectedProductsReducer} from './productReducer';
// const reducers = combineReducers({});
const reducers = combineReducers({
    // key: val
    allProducts: productReducer,
    product: selectedProductsReducer,

}) ;
// // created action, action-types, reducer, combined reducers , time to create store
export default reducers;