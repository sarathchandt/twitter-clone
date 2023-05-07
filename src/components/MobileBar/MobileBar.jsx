import { FiMail } from '@react-icons/all-files/fi/FiMail'
import { RiHome2Fill } from '@react-icons/all-files/ri/RiHome2Fill'
import { BsBookmark } from '@react-icons/all-files/bs/BsBookmark'
import { BiUser } from '@react-icons/all-files/bi/BiUser'
import {IoIosAddCircle} from '@react-icons/all-files/io/IoIosAddCircle'
import { useNavigate } from 'react-router-dom'
function MobileBar() {
    let navigate = useNavigate()
    return (
        <>
        <div className=" flex justify-end m-2 "><IoIosAddCircle className='text-primary ' style={{fontSize:'50px'}} onClick={()=>{navigate('/addTweet')}} /></div>
            <div className="flex  border-t-2  bg-black">
            <div className=" text-backgroundLogin   my-3 text-xl w-3/12 flex justify-center">
                <RiHome2Fill className="text-3xl mr-3" onClick={()=>{navigate('/')}} />
            </div>
            <div className=" text-backgroundLogin   my-3 text-xl w-3/12 flex justify-center">
                <FiMail className="text-3xl mr-3" />
            </div>
            <div className=" text-backgroundLogin  my-3 text-xl w-3/12 flex justify-center">
                <BsBookmark className="text-3xl mr-3" />
            </div>
            <div className=" text-backgroundLogin  my-3 text-xl w-3/12 flex justify-center">
                <BiUser className="text-3xl mr-3" onClick={()=>{navigate('/viewTweet')}} />
            </div>
            </div>
        </>
    )
}

export default MobileBar