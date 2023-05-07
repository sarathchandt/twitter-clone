import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../api/apiSheet";


let initialState = {
    allPost : []
}


export const fetchAllPost = createAsyncThunk('allPost/fetchAllPost',async(headers)=>{
    return axios.get(`${api}/tweet/all`, { headers })
})

const allPostSlice = createSlice({
    name:'allPost',
    initialState:initialState,
    extraReducers:(builders)=>{
        builders.addCase(fetchAllPost.fulfilled,(state, action)=>{
            state.allPost = action?.payload?.data.reverse()
        })
    }
})

export default allPostSlice.reducer