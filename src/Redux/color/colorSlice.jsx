import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
    name:"color",
    initialState:{
        value:"blue"
    },
    reducers:{
        change_color:(state,action)=>{
            state.value = action.payload.color
        }
    }
})

// This exports the action creator so it can be dispatched later.
export const {change_color} = colorSlice.actions

// This exports the reducer function (which handles the color state changes) to be used in the store.
export default colorSlice.reducer