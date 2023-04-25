import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { supabase } from '../lib/supabaseClient'
import { setUser } from '../redux/slice/userSlice'

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogin = async () => {
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)

        const {data: { user }, error} = await supabase.auth.signInWithPassword({
            email: emailRef.current.value,
            password: passwordRef.current.value
        })

        if (error) {
            toast.error(error.message)
            return
        }

        if(user){
            toast.success('Login successful')
            dispatch(setUser(user))
            navigate('/')
        }
    }

    return (
        <div className="flex-grow flex justify-center items-center bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: "url(https://plus.unsplash.com/premium_photo-1663853120633-71b80c02e7bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80)" }}>
            <div className="absolute bg-gradient-to-b from-blue-500 to-blue-400 opacity-75 inset-0 z-0"></div>
            <div className="sm:flex sm:flex-row mx-0 justify-center">
                <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
                    <div className="self-start hidden lg:flex flex-col  text-white">
                        <img src="" className="mb-3" />
                        <h1 className="mb-3 font-bold text-5xl">Welcome Back to Oyatsu </h1>
                        <p className="pr-3">Lorem ipsum is placeholder text commonly used in the graphic, print,
                            and publishing industries for previewing layouts and visual mockups</p>
                    </div>
                </div>
                <div className="flex justify-center self-center  z-10">
                    <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
                        <div className="mb-4">
                            <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
                            <p className="text-gray-500">Please sign in to your account.</p>
                        </div>
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                                <input ref={emailRef} type="email" className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400" placeholder="sweet@oyatsu.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                    Password
                                </label>
                                <input ref={passwordRef} type="password" className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400" placeholder="Enter your password" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                                    <label className="ml-2 block text-sm text-gray-800">
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <a href="#" className="text-blue-400 hover:text-blue-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>
                            <div>
                                <button onClick={handleLogin} type="submit" className="w-full flex justify-center bg-blue-400  hover:bg-blue-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                    Sign in
                                </button>
                            </div>
                            <div className="flex items-center justify-center">
                                <h1 className="text-gray-400 text-xs">
                                    Don't have an account ?
                                    <Link to="/register" className="text-blue-400 hover:text-blue-500"> Sign Up</Link>
                                </h1>
                            </div>
                        </div>
                        <div className="pt-5 text-center text-gray-400 text-xs">
                            <span>
                                Copyright © 2023
                                <a href="#" rel="" target="_blank" title="oyatsu" className="text-blue hover:text-blue-500 "> Oyatsu!</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login