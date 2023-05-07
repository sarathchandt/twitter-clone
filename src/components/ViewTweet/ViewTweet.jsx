import { AiFillDelete } from '@react-icons/all-files/ai/AiFillDelete'
import axios from 'axios'
import { useEffect } from 'react'
import { api } from '../../../api/apiSheet'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTweets } from '../../../slices/fetchAllSelfTweet'
import { fetchAllPost } from '../../../slices/fetchAllTweets'

function ViewTweet() {

    
    let userDetails = useSelector(state => state.globalUser)
    let myTweet = useSelector(state => state.myTweet.selfTweet)
    let dispatch = useDispatch()
    useEffect(() => {
        const username = userDetails.userName;
        const password = userDetails.password;
        const credentials = btoa(`${username}:${password}`);
        const headers = { 'Authorization': `Basic ${credentials}` };
        dispatch(fetchTweets(headers))
    }, [ ])

    function deleteTweet(id) {
        const username = userDetails.userName;
        const password = userDetails.password;
        const credentials = btoa(`${username}:${password}`);
        const headers = { 'Authorization': `Basic ${credentials}` };
        axios.delete(`${api}/tweet/${id}`, { headers }).then(() => {
         
            dispatch(fetchTweets(headers))
            dispatch(fetchAllPost(headers))
            

        })
    }

    function getDateDiffInDays(dateString) {
        const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
        const currentDate = new Date();
        const givenDate = new Date(dateString);
        const diffInMilliseconds = currentDate - givenDate;
        const diffInDays = Math.floor(diffInMilliseconds / oneDayInMilliseconds);
        console.log(diffInDays);
        if (diffInDays <= 0) {
            return "today"
        } else {
            return diffInDays + " days";
        }
    }

  return (
    <>
    
  <div className="container-fluid">
            <div className="row large-2">
                <div className="col-12">
                    <div className="w-full bg-[#16181c] rounded-4 text-backgroundLogin pb-1 h-auto mt-5">

                        <h1 className="flex justify-center text-xl font-bold pt-3">Your tweets</h1>
                        {myTweet.length == 0 ? <div className='flex justify-center my-5' > please add tweets</div> :
                            myTweet.map(tweet => {
                                return <>
                                    <div className=" my-3">
                                        <p className="text-secondary mx-2">{getDateDiffInDays(tweet?.createdAt)}</p>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-10">
                                                    <p className="p-2 w-10/12 flex">{tweet?.tweet}  </p>
                                                </div>
                                                <div className="col-2">
                                                    <p className='mt-2 cursor-pointer' onClick={() => { deleteTweet(tweet?.id) }}><AiFillDelete className='hover:text-[#a60c11]' /></p>
                                                </div>
                                            </div>
                                        </div>

                                        <hr />
                                    </div>
                                </>
                            })
                        }



                    </div>
                </div>
            </div>
        </div>

   </>
  )
}

export default ViewTweet