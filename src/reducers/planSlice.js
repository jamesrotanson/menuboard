import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    planCount: 100,
}

const planSlice = createSlice({
    name: 'planCount',
    initialState,
    reducers: {
        increasePlanCount: (state) => {
            state.planCount = state.planCount + 1;
            console.log(state.planCount);
        },
        decreasePlanCount: (state) => {
            state.planCount = state.planCount - 1;
        }
    }
})



export const {increasePlanCount, decreasePlanCount} = planSlice.actions

export default planSlice.reducer