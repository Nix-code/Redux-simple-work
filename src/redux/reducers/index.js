// sometimes we may have many reducer functions together
// we need to combine all those reducers in a index.js
// combineReducer is inside redux
import {combineReducers} from 'redux';
import { productReducer } from './productReducer';

const reducer = combineReducers({
    // key: val
    allProducts: productReducer 
})