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

const getInitialUnscheduledRecipes = () => {
    const localUnscheduledRecipesList = window.localStorage.getItem('unscheduledRecipeList')

    if(localUnscheduledRecipesList){
        return JSON.parse(localUnscheduledRecipesList)
    }

    window.localStorage.setItem('unscheduledRecipeList', JSON.stringify([]));
    return [];
}


const initialValue = {
    recipeList: getInitialRecipes(),
    count: 0,
    unscheduledRecipeList: getInitialUnscheduledRecipes(),
}

export const recipeReducer = createSlice({
    name: 'recipe', 
    initialState: initialValue, 
    reducers: {
        scheduleRecipe: (state, action) => {
            state.unscheduledRecipeList.push(action.payload);
            const unscheduledRecipeList = window.localStorage.getItem('unscheduledRecipeList');

            if(unscheduledRecipeList){
                const unscheduledRecipeListArray = JSON.parse(unscheduledRecipeList);
                unscheduledRecipeListArray.push({
                    ...action.payload,
                });
                window.localStorage.setItem('unscheduledRecipeList', JSON.stringify(unscheduledRecipeListArray))
            }
            else {
                window.localStorage.setItem('unscheduledRecipeList', JSON.stringify([...action.payload]))
            }
        },
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
            else{
                window.localStorage.setItem('recipeList', JSON.stringify([...action.payload]))
            }
        },
        deleteRecipe: (state, action) => {
            const recipeList = window.localStorage.getItem('recipeList');
            if(recipeList){
                const recipeListArray = JSON.parse(recipeList);
                recipeListArray.forEach((recipe, index) => {
                    if(recipe.id === action.payload){
                        recipeListArray.splice(index, 1);
                    }
                });

                window.localStorage.setItem('recipeList', JSON.stringify(recipeListArray));
                console.log(recipeListArray)
                state.recipeList = recipeListArray;
            }
        }, 
        updateRecipe: (state, action) => {
            console.log('this is update')
            state.count = state.count + 1;
            console.log(state.count)    
        }
    }
});



export const {addRecipe, deleteRecipe, updateRecipe, scheduleRecipe} = recipeReducer.actions;

export default recipeReducer.reducer;