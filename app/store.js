import { configureStore } from "@reduxjs/toolkit";

import globalUser from '../slices/userDetails'

const store = configureStore({
    reducer:{
        globalUser:globalUser
    }
})


export default store;