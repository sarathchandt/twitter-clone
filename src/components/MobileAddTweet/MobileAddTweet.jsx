import { useState } from 'react'
import { FaGlobeAmericas } from '@react-icons/all-files/fa/FaGlobeAmericas'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import { api } from '../../../api/apiSheet';
import axios from 'axios';
import { fetchTweets } from '../../../slices/fetchAllSelfTweet';
import { fetchAllPost } from '../../../slices/fetchAllTweets';

import './MobileAddTweet.css'
import { useNavigate } from 'react-router-dom';

function MobileAddTweet() {
    let [tweet, setTweet] = useState('')
    let dispatch = useDispatch()
    let userDetails = useSelector(state => state.globalUser)

    let navigate = useNavigate()



    function addTweet() {
        if (tweet.length == 0) {
            toast("can't post blank tweet");
        } else {

            const username = userDetails.userName;
            const password = userDetails.password;
            const credentials = btoa(`${username}:${password}`);
            const headers = { 'Authorization': `Basic ${credentials}` };
            axios.post(`${api}/tweet/new`, { tweet: tweet }, { headers }).then(() => {
                setTweet('')
                dispatch(fetchTweets(headers))
                dispatch(fetchAllPost(headers))
                navigate('/')
            })
        }
    }

    return (
        <>
            <ToastContainer />

            <div className="container">
                <div className="row mt-3">
                    <div className="col-2 md:hidden block">

                        <img src="/images/istockphoto-1337144146-612x612.jpg" className='w-8 h-8 rounded-5 m-5 mt-1' alt="" />
                    </div>
                    <div className="col-10 md:hidden block ">
                        <div className='border-2 border-primary my-2 rounded-5 mx-4 w-12/12 flex text-backgroundLogin justify-center'>Everyone </div>
                        <textarea type="text" className="bg-black text-2xl mt-3 w-full text-backgroundLogin " placeholder=" What's happening ?" value={tweet} onChange={(e) => { setTweet(e.target.value) }} style={{ outline: 'none', overflow: 'hidden' }} />
                        <div className='flex my-3 text-primary font-bold'>
                            <div><FaGlobeAmericas className='mt-1 mr-2' /></div>
                            <div className=''>Everyone can reply</div>
                        </div>
                        <div className="flex justify-end">
                            <div className=" text-backgroundLogin btn btn-primary rounded-5 object-end" onClick={() => { addTweet() }}>
                                Tweet
                            </div>

                        </div>
                        <hr className='my-4' />

                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileAddTweet