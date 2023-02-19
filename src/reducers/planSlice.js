import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    planCount: 0,
}

const planSlice = createSlice({
    name: 'planCount',
    initialState,
    reducers: {
        increasePlanCount: (state) => {
            state.planCount = state.planCount + 1;
        },
        decreasePlanCount: (state) => {
            state.planCount = state.planCount - 1;
        }
    }
})



export const {increasePlanCount, decreasePlanCount} = planSlice.actions

export default planSlice.reducer