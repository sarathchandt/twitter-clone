import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom"
import {  useState } from "react";
import UserHome from "./UserHome";

function protectedRoutes() {

  let [loggedState] = useState(useSelector(state=>state.globalUser.isLoggin))
  return ( 
   loggedState ? <UserHome/> : <Outlet/> 
  )
}

export default protectedRoutes