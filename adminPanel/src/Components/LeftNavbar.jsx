import React from 'react'
import { assets } from '../assets/assets'



const LeftNavbar = () => {
    return (
        <div className='w-60 h-auto flex flex-col  bg-gradient-to-l from-yellow-400 to-yellow-700'>
            {/** Top Header */}
            <div className=' flex flex-row p-2'>
                <div className='flex items-center justify-center p-1'>
                    <img src={assets.sidebarLogo} alt="" className='w-17 h-16 ' />
                </div>
                <div className='text-white'>
                    <h2 className='font-bold text-lg'>Iwawa</h2>
                    <p className='text-sm font-light'>Rehabilitation Center</p>
                    <p className='text-sm font-light'>SMIS Dashbord</p>
                </div>
            </div>
        </div>
    )
}

export default LeftNavbar