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
const EducationInfo = ({ employee, setEmployee }) => {
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
                <h1 className='text-3xl font-semibold text-[#D89B17]'>Education Information</h1>
            </div>
            {/* Content division */}
            <div className='grid grid-cols-1 xl:grid-cols-4 gap-8  '>
                {/* Profile Picture division */}

                {/* Main Div Of Inputs */}
                <div className='xl:col-span-4 '>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                        {/* Inputs */}
                        {/* Education level Input Field */}
                        <div className='flex flex-col p-3'>
                            <label className="block text-sm mb-2 font-bold text-gray-700">
                                Education level
                            </label>
                            <div className='flex flex-row items-center shadow-xl'>
                                {/* Icon */}
                                <CiCalendarDate size={23} className="ml-5 text-[#D89D1E] flex-shrink-0" />
                                <select onChange={handleEveryChange} className='flex bg-white  p-[12px] outline-none text-xl 2xl:text-4xl text-gray-400 peer' value={employee.educationLevel} name="educationLevel" id="">
                                    <option disabled hidden className="text-gray-400" value="">Select Education level</option>
                                    <option value="A1">A2</option>
                                    <option value="A2">A1</option>
                                    <option value="A0">A0</option>
                                    <option value="Masters">Masters</option>
                                    <option value="PHD">PHD</option>
                                </select>
                            </div>
                        </div>

                        {/* Specialization Input Field */}
                        <div className='flex flex-col p-3'>
                            <label className="block text-sm mb-2 font-bold text-gray-700">
                                Specialization
                            </label>
                            <div className='flex  items-center bg-white  shadow-xl mb-3'>
                                <FaUserAlt size={20} className="ml-5 text-[#D89D1E]  flex-shrink-0 " />
                                <input name='specialization' value={employee.specialization} onChange={handleEveryChange} type="text" placeholder='Specialization' className='outline-none p-3 2xl:p-4 text-xl 2xl:text-3xl' />
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default EducationInfo