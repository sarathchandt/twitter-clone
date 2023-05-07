import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../api/apiSheet";

let initialState = {
    selfTweet: []
}

export let fetchTweets = createAsyncThunk('fetchSelf/fetchTweets', async (headers) => {
    return await axios.get(`${api}/tweet/my-all`, { headers })
})

const fetchingMytweetSlice = createSlice({
    name:'fetchSelf',
    initialState:initialState,
    extraReducers:(builders)=>{
        builders.addCase(fetchTweets.fulfilled,(state,action)=>{
            state.selfTweet = action.payload.data.reverse()
        })
    }
}) 

export default  fetchingMytweetSlice.reducer;