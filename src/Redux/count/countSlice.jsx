import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name : "count",
    initialState :{
        value : 0
    },
    reducers :{
        increment_count : (state) => {
            state.value += 1
        },
        decrement_count : (state) => {
            state.value -= 1
        }
    }

})

export const { increment_count,decrement_count} = countSlice.actions

export default countSlice.reducer