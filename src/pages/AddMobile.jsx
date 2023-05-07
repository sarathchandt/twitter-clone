import MobileAddTweet from "../components/MobileAddTweet/MobileAddTweet"
import MobileBar from "../components/MobileBar/MobileBar"

function addTweetMobile() {
  return (
    <>
    <MobileAddTweet/>
    <div className=" md:hidden block fixed bottom-0 w-full ">
           <MobileBar/>
          </div>
    </>
  )
}

export default addTweetMobile