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

const NextofKin = ({ employee, setEmployee }) => {
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
                        {/* Next of Kin */}
                        <div className='flex flex-col p-3'>
                            <label className="block text-sm mb-2 font-bold text-gray-700">
                                Next of Kin
                            </label>
                            <div className='flex  items-center bg-white  shadow-xl mb-3'>
                                <FaUserAlt size={20} className="ml-5 text-[#D89D1E]  flex-shrink-0 " />
                                <input onChange={handleEveryChange} value={employee.nextOfKin} name='nextOfKin' type="text" placeholder='Enter Next of Kin Name' className='outline-none p-3 2xl:p-6 text-xl 2xl:text-4xl' />
                            </div>
                        </div>
                        <div className='flex flex-col p-3'>
                            <label className="block text-sm mb-2 font-bold text-gray-700">
                                Next of Kin Phone
                            </label>
                            <div className='flex  items-center bg-white  shadow-xl mb-3'>
                                <FaUserAlt size={20} className="ml-5 text-[#D89D1E]  flex-shrink-0 " />
                                <input onChange={handleEveryChange} name='nextOfKinPhone' value={employee.nextOfKinPhone} type="text" placeholder='Enter Next of Kin Mobile' className='outline-none p-3 2xl:p-6 text-xl 2xl:text-4xl' />
                            </div>
                        </div>
                        <div className='flex flex-col p-3'>
                            <label className="block text-sm mb-2 font-bold text-gray-700">
                                Relationship with Next Of kin
                            </label>
                            <div className='flex  items-center bg-white  shadow-xl mb-3'>
                                <FaUserAlt size={20} className="ml-5 text-[#D89D1E]  flex-shrink-0 " />
                                <input onChange={handleEveryChange} value={employee.relationshipWithNextOfKin} name='relationshipWithNextOfKin' type="text" placeholder='Enter Relationship' className='outline-none p-3 2xl:p-6 text-xl 2xl:text-4xl' />
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default NextofKin