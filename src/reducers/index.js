import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';
import planReducer from './planSlice';


const rootReducer = combineReducers({
    recipe: recipeReducer,
    planCount: planReducer
})

export default rootReducer;