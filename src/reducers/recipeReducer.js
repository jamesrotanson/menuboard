import { createSlice } from "@reduxjs/toolkit"

const getInitialRecipes = () => {
    const localRecipesList = window.localStorage.getItem('recipeList')

    if(localRecipesList){
        return JSON.parse(localRecipesList)
    }
    // If there is no recipes in local storage, set an empty array
    window.localStorage.setItem('recipeList', JSON.stringify([]));
    return [];
}

const initialValue = {
    recipeList: getInitialRecipes(),
}

export const recipeReducer = createSlice({
    name: 'recipe', 
    initialState: initialValue, 
    reducers: {
        addRecipe: (state, action) => {
            state.recipeList.push(action.payload);
            const recipeList = window.localStorage.getItem('recipeList');
            
            // If the recipe list can be retrieved
            if(recipeList){

                // Make it into an array
                const recipeListArray = JSON.parse(recipeList);
                
                // Then add the data to it (push)
                recipeListArray.push({
                    ...action.payload,
                });

                // Then set it back and stringify
                window.localStorage.setItem('recipeList', JSON.stringify(recipeListArray));
            }
        }
    }
});



export const {addRecipe} = recipeReducer.actions;

export default recipeReducer.reducer;