import React from 'react'
import {
    FaUserAlt,
    FaUser,
    FaLock,
    FaCamera,
    FaPhoneAlt,
    FaEnvelope,
    FaIdCard,
} from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { TfiAgenda } from "react-icons/tfi";

const LocationInfo = ({ employee, setEmployee }) => {
    const handleEveryChange = (e) => {
        setEmployee({
            ...employee, [e.target.name]: e.target.value
        })
    }
    return (
        <div className='rounded-3xl border border-yellow-200 bg-white shadow-xl p-5 m-5'>
            {/* Job Information Heading division */}
            <div className='flex items-center gap-3 mb-8'>
                {/* job Information Heading Icon */}
                <div className='w-9 h-9 rounded-xl bg-yellow-200 flex items-center justify-center'>
                    <FaUserAlt size={20} className="text-[#D89B17]" />
                </div>
                <h1 className='text-3xl font-semibold text-[#D89B17]'>Location Information</h1>
            </div>
            {/* Content division */}
            <div className='grid grid-cols-1 xl:grid-cols-4 gap-8  '>
                {/* Profile Picture division */}

                {/* Main Div Of Inputs */}
                <div className='xl:col-span-4 '>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>

                        {/* District level Input Field */}
                        <div className='flex flex-col p-3'>
                            <label className="block text-sm mb-2 font-bold text-gray-700">
                                District
                            </label>
                            <div className='flex  items-center bg-white  shadow-xl mb-3'>
                                <FaUserAlt size={20} className="ml-5 text-[#D89D1E]  flex-shrink-0 " />
                                <input name='district' value={employee.district} onChange={handleEveryChange} type="text" placeholder='District' className='outline-none p-3 2xl:p-6 text-xl 2xl:text-4xl' />
                            </div>
                        </div>

                        {/* Sector Input Field */}
                        <div className='flex flex-col p-3'>
                            <label className="block text-sm mb-2 font-bold text-gray-700">
                                Sector
                            </label>
                            <div className='flex  items-center bg-white  shadow-xl mb-3'>
                                <FaUserAlt size={20} className="ml-5 text-[#D89D1E]  flex-shrink-0 " />
                                <input name='sector' value={employee.sector} onChange={handleEveryChange} type="text" placeholder='Enter Sector' className='outline-none p-3 2xl:p-6 text-xl 2xl:text-4xl' />
                            </div>
                        </div>
                        {/* Cell */}
                        <div className='flex flex-col p-3'>
                            <label className="block text-sm mb-2 font-bold text-gray-700">
                                Cell
                            </label>
                            <div className='flex  items-center bg-white  shadow-xl mb-3'>
                                <FaUserAlt size={20} className="ml-5 text-[#D89D1E]  flex-shrink-0 " />
                                <input onChange={handleEveryChange} value={employee.cell} name='cell' type="text" placeholder='Enter Cell' className='outline-none p-3 2xl:p-6 text-xl 2xl:text-4xl' />
                            </div>
                        </div>
                        <div className='flex flex-col p-3'>
                            <label className="block text-sm mb-2 font-bold text-gray-700">
                                Village
                            </label>
                            <div className='flex  items-center bg-white  shadow-xl mb-3'>
                                <FaUserAlt size={20} className="ml-5 text-[#D89D1E]  flex-shrink-0 " />
                                <input name='village' onChange={handleEveryChange} value={employee.village} type="text" placeholder='Enter Village' className='outline-none p-3 2xl:p-6 text-xl 2xl:text-4xl' />
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default LocationInfo