import { createStore, combineReducers } from 'redux';
import recipeReducer from '../reducers/recipeReducer';

const rootReducer = combineReducers({
  recipe: recipeReducer
});

export default function configureStore() {
  return createStore(rootReducer);
}
