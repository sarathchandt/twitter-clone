import {  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'


import './LoginComponent.css'

import { GiCancel } from '@react-icons/all-files/gi/GiCancel.esm'
import { ImTwitter } from '@react-icons/all-files/im/ImTwitter.esm'
import { FcGoogle } from '@react-icons/all-files/fc/FcGoogle.esm'
import { AiFillApple } from "@react-icons/all-files/ai/AiFillApple.esm"
import { setUser } from '../../../slices/userDetails'
import axios from 'axios'
import { api } from '../../../api/apiSheet'
function LoginComponent() {

    let [userName, setUserName] = useState("")
    let [password, setPassword] = useState("")
    let [validator, setValidator] = useState(false)
    let dispatch = useDispatch()
    let navigate = useNavigate()




    function login() {
        if (userName.length == 0 && password.length == 0) {
            setValidator(true)
        } else {
            axios.post(`${api}/auth/login`, { username: userName, password: password }).then(()=> {
                dispatch(setUser({userName:userName,password:password}))
                setTimeout(()=>{
                    navigate("/home")
                },1000)
            }).catch(err=>console.log(err))
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row  bg-gradient-to-r from-cyan-500 to-blue-500 py-4 h-screen">
                    <div className="flex col-12 justify-center">
                        <div className=" bg-black w-full md:w-5/12  rounded-5 text-backgroundLogin     ">
                            <div className="w-fill text-backgroundLogin my-3  relative">
                                <div className="absolute top-0 left-5 "><GiCancel className="text-3xl" /></div>
                                <div className="absolute top-0 right-5"><ImTwitter className="text-3xl" /></div>
                            </div>

                            <div className="mt-5 mb-5">
                                <h1 className='flex justify-center mt-5 font-bold text-3xl '>Sign in to Twitter</h1>
                            </div>
                            <div className="flex justify-center my-2 ">
                                <p className='bg-white rounded-5 mx-2 md:mx-0 w-full md:w-6/12 py-2 flex justify-center text-black'><FcGoogle className="mt-1 mr-2" />Sign in with google</p>
                            </div>
                            <div className="flex justify-center my-2">
                                <p className='bg-white rounded-5 mx-2 md:mx-0  w-full md:w-6/12  py-2 flex justify-center text-black'><AiFillApple className="mt-1 mr-2" />Sign in with apple</p>
                            </div>
                            <div className="flex justify-center my-2">
                                <div className="w-6/12 flex my-1">
                                    <div className="line "></div>
                                    <div className="mx-2">or</div>
                                    <div className="line"></div>
                                </div>
                            </div>
                            <div className="flex justify-center my-2 ">
                                <input type="text" placeholder=' phone, email, or user name' className=' bg-black border-[#807e7c] border-2 mx-2 md:mx-0  rounded h-12 w-full md:w-6/12' value={userName} onChange={(e) => { setUserName(e.target.value) }} />
                            </div>
                            <div className="flex justify-center my-2 ">
                                <input type="text" placeholder=' password' className=' bg-black border-[#807e7c] border-2 mx-2 md:mx-0  rounded h-12 w-full md:w-6/12' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            </div>
                            <div className="flex justify-center my-2">
                                <p className='bg-white rounded-5 mx-2 md:mx-0  w-full md:w-6/12  py-2 flex justify-center text-black font-bold' onClick={() => { login() }}>Sign in</p>
                            </div>
                            <div className="flex justify-center my-2">
                                <p className='bg-black border-2 border-[#807e7c] rounded-5 mx-2 md:mx-0  w-full md:w-6/12  py-2 flex justify-center text-white font-thin'>forgot password ?</p>
                            </div>
                            {validator ? <div className='flex justify-center text-warning'> plese fill the form properly</div> : < ></>}
                            <div className='flex justify-center my-5'>
                                <p>Donot have an account ?<a href='#' className='text-blue-500'> Sign up</a></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default LoginComponent