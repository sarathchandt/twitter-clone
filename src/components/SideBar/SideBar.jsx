import { ImTwitter } from '@react-icons/all-files/im/ImTwitter.esm'
import { RiHome2Fill } from '@react-icons/all-files/ri/RiHome2Fill'
import {FaHashtag} from '@react-icons/all-files/fa/FaHashtag'
// import {IoNotificationsOutline} from "@react-icons/all-files/io/IoMdNotificationsOutline"
import {FiMail} from '@react-icons/all-files/fi/FiMail'
import {FaListAlt} from '@react-icons/all-files/fa/FaListAlt'
import {BsBookmark} from '@react-icons/all-files/bs/BsBookmark'
import {BiUser} from '@react-icons/all-files/bi/BiUser'
import {CgMoreO} from '@react-icons/all-files/cg/CgMoreO'
import { useSelector } from 'react-redux'

import './SideBar.css'


function SideBar() {
    let userName = useSelector(state=>state.globalUser.userName)
    return (
        <>
            <div className="container-fluid  ">
                <div className="row pt-4 large-2">
                    <div className="col-2"></div>
                    <div className="col-10 py-4 text-backgroundLogin">
                        <ImTwitter className="text-3xl" />
                    </div>
                    <div className="col-2"></div>
                    <div className="col-10 text-backgroundLogin flex font-bold my-3 text-xl">
                        <RiHome2Fill className="text-3xl mr-3" /> Home
                    </div>
                    <div className="col-2"></div>
                    <div className="col-10 text-backgroundLogin flex font-bold my-3 text-xl">
                        <FaHashtag className="text-3xl mr-3" /> Explore
                    </div> 
                    {/* <div className="col-2"></div>
                    <div className="col-10 text-backgroundLogin flex font-bold my-3 text-xl">
                         <IoNotificationsOutline className="text-3xl mr-3" /> Notifications 
                    </div> */}
                    <div className="col-2"></div>
                    <div className="col-10 text-backgroundLogin flex font-bold my-3 text-xl">
                        <FiMail className="text-3xl mr-3" /> Messages
                    </div>
                    <div className="col-2"></div>
                    <div className="col-10 text-backgroundLogin flex font-bold my-3 text-xl">
                        <FaListAlt className="text-3xl mr-3" /> List
                    </div>
                    <div className="col-2"></div>
                    <div className="col-10 text-backgroundLogin flex font-bold my-3 text-xl">
                        <BsBookmark className="text-3xl mr-3" /> Bookmarks
                    </div>
                   
                    <div className="col-2"></div>
                    <div className="col-10 text-backgroundLogin flex font-bold my-3 text-xl">
                        <BiUser className="text-3xl mr-3" /> Profile
                    </div>
                    <div className="col-2"></div>
                    <div className="col-10 text-backgroundLogin flex font-bold my-3 text-xl">
                        <CgMoreO className="text-3xl mr-3" /> More
                    </div>
                    <div className="col-2"></div>
                    <div className="col-10 text-backgroundLogin flex font-bold my-3 text-xl rounded-5 bg-primary flex justify-center w-8/12 p-2">
                        Tweet
                    </div>
                    <div className="col-2"></div>
                    <div className="col-10 text-backgroundLogin flex pt-2">
                        <img src="/images/istockphoto-1337144146-612x612.jpg" className='w-10 h-10 rounded-5 mt-1' alt="" />
                       <div  className='ms-3'>
                        <p  className='font-bold'>{userName}</p>
                        <p >@{userName}.com</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SideBar