import {BsChat} from '@react-icons/all-files/bs/BsChat'
import {AiOutlineRetweet} from '@react-icons/all-files/ai/AiOutlineRetweet'
import {AiOutlineHeart} from '@react-icons/all-files/ai/AiOutlineHeart'
import {GoGraph} from '@react-icons/all-files/go/GoGraph'
import {FiShare} from '@react-icons/all-files/fi/FiShare'
import { useState } from 'react'
function PostComponent(props) {

    let [chat] = useState(Math.floor(1000 + Math.random() * 9000))
    let [reTweet] = useState(Math.floor(1000 + Math.random() * 9000))
    let [like] = useState(Math.floor(1000 + Math.random() * 9000))
    let [view] = useState(Math.floor(1000 + Math.random() * 9000))
    
    function getDateDiffInDays(dateString) {
        const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
        const currentDate = new Date();
        const givenDate = new Date(dateString);
        const diffInMilliseconds = currentDate - givenDate;
        const diffInDays = Math.floor(diffInMilliseconds / oneDayInMilliseconds);
        console.log(diffInDays);
        if(diffInDays <=  0  ){
            return "today"
        }else{
            return diffInDays + " days";
        }
      }
    return (
        <div className="col-12 mt-2 " key={props?.value?.id.toString()}>
            <div className=" flex ">
                <img src="/images/istockphoto-1337144146-612x612.jpg" className='w-8 h-8 rounded-5 md:ms-5 mr-2 mt-1' alt="" />
                <div className="">
                    <p className='flex'>{props?.value?.author?.username} <p className=' ms-1 text-secondary'>@{props?.value?.author?.username}.com   </p> <p className='text-secondary'> - {getDateDiffInDays(props?.value?.createdAt)}  </p> </p>
                    <p>{props?.value?.tweet}</p>
                </div>
            </div>
            <div className="flex justify-center mt-5">
                <div className='flex mx-2 hover:text-[#3feb21] cursor-pointer  font-thin '><BsChat  className='mt-1 mr-1 '/>{chat}</div>
                <div className='flex mx-2 hover:text-[#291ce6] cursor-pointer font-thin '><AiOutlineRetweet className='mt-1 mr-1'/>{reTweet}</div>
                <div className='flex mx-2 hover:text-[#de5be3] cursor-pointer font-thin '><AiOutlineHeart className='mt-1 mr-1'/>{like}</div>
                <div className='flex mx-2 hover:text-[#e31219] cursor-pointer font-thin '><GoGraph className='mt-1 mr-1'/>{view}</div>
                <div className='flex mx-2 hover:text-[#3feb21] cursor-pointer font-thin '><FiShare className='mt-1 mr-1'/></div>
            </div>
            <hr className='m-1' />
        </div>
    )
}

export default PostComponent