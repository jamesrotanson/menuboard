import { combineReducers } from 'redux';
import reducer from './reducer';
import recipeReducer from './recipeReducer';

export default combineReducers({
    reducer, recipeReducer
})