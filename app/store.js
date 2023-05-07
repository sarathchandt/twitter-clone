import { configureStore } from "@reduxjs/toolkit";

import globalUser from '../slices/userDetails'
import fetchMyTweet  from '../slices/fetchAllSelfTweet' 
import fetchAllTweets from "../slices/fetchAllTweets";
const store = configureStore({
    reducer:{
        globalUser:globalUser,
        myTweet : fetchMyTweet,
        allTweet : fetchAllTweets
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }), 
})


export default store;