import { createSlice } from "@reduxjs/toolkit";

export const generalsSlice = createSlice({
    name:"general",
    initialState:{
        sideMenuOptionSelected:"dashboard",    
    },
    reducers:{
        changeSideMenuOptionSelected:(state, action) =>{
            state.sideMenuOptionSelected = action.payload;
        }
    }
})

export const {
    changeSideMenuOptionSelected
} = generalsSlice.actions;