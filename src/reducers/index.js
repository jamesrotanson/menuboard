import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';
import planReducer from './planSlice';
import groceryReducer from './groceryReducer';


const rootReducer = combineReducers({
    recipe: recipeReducer,
    planCount: planReducer,
    grocery: groceryReducer
})

export default rootReducer;