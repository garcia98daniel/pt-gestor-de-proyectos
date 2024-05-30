import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name:"user",
    initialState:{
        name:"DANIEL",    
    },
    reducers:{
        changeUserName:(state, action) =>{
            state.name=action.payload;
        }
    }
})

export const {changeUserName} = Slice.actions;