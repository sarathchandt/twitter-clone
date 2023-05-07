import HomeMainComponent from "../components/HomeMainComponent/HomeMainComponent"
import MobileBar from "../components/MobileBar/MobileBar"
import SideBar from "../components/SideBar/SideBar"
import UserTweetView from "../components/userTweetView/UserTweetView"


function UserHome() {
  return (
    <>
      <div className="container-fluid">
        <div className="row relative">
          <div className=" md:block hidden col-md-3 fixed">
            <SideBar />
          </div>
          <div className="md:block hidden col-md-3"></div>
          <div className="col-md-6 border-r-2">
            <HomeMainComponent />
          </div>
          <div className=" md:block hidden col-md-3 fixed top-0 right-0 ">
            <UserTweetView />
          </div>
          <div className=" md:hidden block fixed bottom-0 w-full ">
           <MobileBar/>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default UserHome