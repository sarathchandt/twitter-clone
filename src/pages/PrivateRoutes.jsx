import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom"
import {  useState } from "react";
import  UserLogin from '../pages/UserLogin'


function PrivateRoutes() {
    let [loggedState] = useState(useSelector(state=>state.globalUser.isLoggin))
    return ( 
     loggedState ?  <Outlet/> :<UserLogin/> 
    )
}

export default PrivateRoutes