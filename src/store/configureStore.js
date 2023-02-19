import { createStore, combineReducers } from 'redux';
import recipeReducer from '../reducers/recipeReducer';
import planSlice from '../reducers/planSlice';

const rootReducer = combineReducers({
  recipe: recipeReducer,
  plan: planSlice
});

export default function configureStore() {
  return createStore(rootReducer);
}
