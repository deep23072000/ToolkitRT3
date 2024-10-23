import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
    name:'api',
    initialState:{
        data:[]
    },
    reducers:{
        getData:(state,action)=>{
            console.log("called")
            state.data = action.payload
            window.localStorage.setItem('vvv',JSON.stringify(state.data))
        }
    }
})

export const {getData} = apiSlice.actions;

export default apiSlice.reducer;

