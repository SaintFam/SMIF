import React from 'react'
import { FaUserPlus } from "react-icons/fa";

const RegisterTitle = () => {
    return (
        <div className='mb-8'>
            {/* Register Title */}
            <div className='flex items-center gap-3'>
                {/* Icon Div */}
                <div className='w-15 h-15 rounded-xl  flex items-center justify-center'>
                    <FaUserPlus size={50} className='text-[#D89B17]' />
                </div>
                <h1 className='text-5xl font-bold text-[#D89B17]'>Add New Employee</h1>
            </div>
            {/* Description */}
            <p className='mt-2 ml-2 text-2xl font-light text-gray-600'>Fill In Information below To register new Employee</p>
        </div>
    )
}

export default RegisterTitle