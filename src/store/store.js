import {configureStore} from "@reduxjs/toolkit";
import recipeReducer from "../reducers/recipeReducer";
import planSlice from "../reducers/planSlice";
// import planReducer from "../reducers/reducer";

const store = configureStore({
    reducer: {
        // Recipe reducer
        recipe: recipeReducer, 
        plan: planSlice,
    }
})

export default store