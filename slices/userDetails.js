import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    userName:'',
    isLoggin:false,
    password:""
}

 let  globalUser = createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        setUser:(state, action)=>{
                state.userName=action.payload.userName;
                state.isLoggin=true;
                state.password = action.payload.password
        }
    }

})

export default globalUser.reducer;
export const {setUser } = globalUser.actions