import { createSlice } from "@reduxjs/toolkit";

const getInitialGroceryList = () => {
    const localGroceryList = window.localStorage.getItem('groceryList')

    if (localGroceryList){
        return JSON.parse(localGroceryList)
    }

    window.localStorage.setItem('groceryList', JSON.stringify([]))
    return [];
}

const initialValue = {
    groceryList: getInitialGroceryList(),
}

export const groceryReducer = createSlice({
    name: 'grocery', 
    initialState: initialValue,
    reducers: {
        addToGroceryList: (state, action) => {
            state.addToGroceryList.push(action.payload);
            const groceryList = window.localStorage.getItem('groceryList')

            if(groceryList){
                const groceryListArray = JSON.parse(groceryList);
                groceryListArray.push({
                    ...action.payload,
                })
                window.localStorage.setItem('groceryList', JSON.stringify(groceryList));
                
            }
            else {
                window.localStorage.setItem('groceryList', JSON.stringify([...action.payload]))
            }
        }
    }
})


export const {addToGroceryList} = groceryReducer.actions;

export default groceryReducer.reducer;