import {configureStore} from "@reduxjs/toolkit";
import recipeReducer from "../reducers/recipeReducer";

export const store = configureStore({
    reducer: {
        // Recipe reducer
        recipe: recipeReducer, 
    }
})