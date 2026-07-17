import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { AdminContext } from '../Context/adminContext';

const LoginPage = () => {
    const { navigate } = useContext(AdminContext)
    return (
        <div className='h-screen flex'>
            {/* Left Side */}
            <div
                className='hidden sm:hidden md:flex md:w-1/2 lg:w-1/2 xl:w-1/2 h-full  bg-cover bg-center bg-no-repeat'
                style={{
                    backgroundImage: `url(${assets.LeftSideBackground})`
                }}
            >
            </div>


            {/* Right Side */}
            <div className='w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 bg-[#fbfbb6] flex justify-center items-center '>
                <div className=' bg-white/80  shadow-2xl w-[460px] md:w-[460px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px] h-[500px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[700px] rounded-[60px]  shadow-lg flex flex-col justify-start items-center'>
                    <h1 className='font-bold text-center text-yellow-600 sm:p-6 md:p-8 2xl:p-12 text-3xl sm:text-4xl md:text-4xl 2xl:text-6xl mb-5 mt-10'>Admin Panel</h1>
                    <div className='flex w-4/5 items-center bg-white rounded-[100px] shadow-xl mb-10'>
                        <FaUserAlt size={28} className="ml-5 text-[#D89D1E]  flex-shrink-0 " />
                        <input type="text" placeholder='Email' className='outline-none p-3 2xl:p-6 text-xl 2xl:text-4xl' />
                    </div>
                    <div className='flex w-4/5 items-center bg-white rounded-[100px] shadow-xl mb-10'>
                        <FaLock size={28} className="ml-5 text-[#D89D1E]  flex-shrink-0 " />
                        <input type="password" placeholder='Password' className='outline-none p-3 2xl:p-6 text-xl 2xl:text-4xl' />
                    </div>
                    {/* Register Button */}
                    <div className=' w-full flex justify-end mt-4'>
                        <button onClick={() => navigate("/register")} className='text-[#D89D1E] text-xl hover:underline pr-20'>
                            Register
                        </button>
                    </div>
                    {/* Login Button */}
                    <div className=' w-full flex justify-center mt-4'>
                        <button className=' font-bold w-8/10 bg-[#D89D1E] text-white text-xl hover:bg-[#c08a1c] py-3 px-6 2xl:py-6 2xl:text-4xl   rounded-[100px] shadow-lg'>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage