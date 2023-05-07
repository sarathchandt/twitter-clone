import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom"
import {  useEffect, useState } from "react";
import  UserLogin from '../pages/UserLogin'


function PrivateRoutes() {
    let [loggedState] = useState(false)
    loggedState = useSelector(state=>state.globalUser.isLoggin);
    useEffect(()=>{
    },[])
    return ( 
     loggedState ?  <Outlet/> :<UserLogin/> 
    )
}

export default PrivateRoutes