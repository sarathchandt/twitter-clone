import { FaGlobeAmericas } from '@react-icons/all-files/fa/FaGlobeAmericas'
import './HomeMainComponent.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { api } from '../../../api/apiSheet'
import { useDispatch, useSelector } from 'react-redux'
import PostComponent from './postComponent'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchTweets } from '../../../slices/fetchAllSelfTweet'
import { fetchAllPost } from '../../../slices/fetchAllTweets'
import { ImTwitter } from '@react-icons/all-files/im/ImTwitter.esm'



function HomeMainComponent() {

    let [tweet, setTweet] = useState('')
    let userDetails = useSelector(state => state.globalUser)
    let dispatch = useDispatch()
    let posts = useSelector(state => state.allTweet.allPost)



    useEffect(() => {
        const username = userDetails.userName;
        const password = userDetails.password;
        const credentials = btoa(`${username}:${password}`);
        const headers = { 'Authorization': `Basic ${credentials}` };
        dispatch(fetchAllPost(headers))
    
    }, [])


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
            })
        }
    }



    return (

        <>
            <ToastContainer />

            <div className="container-fluid ">
                <div className="row text-backgroundLogin relative">
                    <div className="col-12 sticky top-0 bg-opacity-50 z-9 backdrop-blur-xl ">
                       <div className="container">
                        <div className="row">
                            <div className="col-6">
                        <h1 className="text-2xl font-bold mt-2">Home</h1>
                            </div>
                            <div className="col-6 flex justify-end">
                        <h1 className="text-2xl font-bold mt-3"><ImTwitter/></h1>
                            </div>
                        </div>
                       </div>
                        <div className="w-12/12 flex mt-5 mb-2">
                            <div className="w-6/12 flex justify-center text-primary ">For you</div>
                            <div className="w-6/12 flex justify-center">Following</div>
                        </div>
                        <hr />
                    </div>
                    <div className="col-12  mt-3">
                        <div className="w-12//12 ">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-2 md:block hidden">

                                        <img src="/images/istockphoto-1337144146-612x612.jpg" className='w-12 h-12 rounded-5 m-5 mt-1' alt="" />
                                    </div>
                                    <div className="col-10 md:block hidden">
                                        <div className='border-2 border-primary my-2 rounded-5 w-5/12 flex justify-center'>Everyone </div>
                                        <textarea type="text" className="bg-black text-2xl mt-3 w-full " placeholder=" What's happening ?" value={tweet} onChange={(e) => { setTweet(e.target.value) }} style={{ outline: 'none', overflow: 'hidden' }} />
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

                                    {
                                        posts.map(post => {
                                            return <><PostComponent value={post} /></>
                                        })
                                    }

                                </div>
                            </div>



                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeMainComponent