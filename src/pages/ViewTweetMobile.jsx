import MobileBar from "../components/MobileBar/MobileBar"
import ViewTweet from "../components/ViewTweet/ViewTweet"

function ViewTweetMobile() {
  return (

<>
<ViewTweet/>
<div className=" md:hidden block fixed bottom-0 w-full ">
           <MobileBar/>
          </div>
</>
    )
}

export default ViewTweetMobile