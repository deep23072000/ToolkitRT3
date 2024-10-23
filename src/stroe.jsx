import { configureStore } from "@reduxjs/toolkit";
import apiReducer from './apiSlice.jsx'

const store = configureStore({
    reducer:{
        api:apiReducer
    }
})

export default store;