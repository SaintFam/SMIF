import React, { useContext, useState } from 'react'
import { AdminContext } from '../Context/adminContext';
import {
    FaUserAlt,
    FaUser,
    FaLock,
    FaCamera,
    FaPhoneAlt,
    FaEnvelope,
    FaIdCard
} from "react-icons/fa";


const PersonalInfo = ({ employee, setEmployee }) => {
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setEmployee({
                ...employee,
                image: file
            });

            setPreview(URL.createObjectURL(file));
        }
    };
    const handleEveryChange = (e) => {

        setEmployee({
            ...employee, [e.target.name]: e.target.value
        })
    }

    return (
        <div className='rounded-3xl border border-yellow-200 bg-white shadow-xl p-2 xl:p-5 m-2 xl:m-5'>
            {/* Personal Information Heading division */}
            <div className='flex items-center gap-1 xl:gap-3 mb-8'>
                {/* Personal Information Heading Icon */}
                <div className=' w-5 xl:w-9 h-5 xl:h-9 rounded-xl bg-yellow-200 flex items-center justify-center'>
                    <FaUserAlt className="text-[#D89B17] text-[10px] xl:text-2xl" />
                </div>
                <h1 className='text-lg xl:text-3xl font-semibold text-[#D89B17]'>Personal Information</h1>
            </div>
            {/* Content division */}
            <div className='grid xl:grid-cols-[180px_repeat(3,1fr)] gap-4'>
                {/* Profile Picture division */}
                <div className=''>
                    <label className="block text-sm mb-2 font-medium text-gray-700">
                        Photo
                    </label>
                    <label
                        htmlFor="image"
                        className="cursor-pointer h-[220px] w-[180px] rounded-2xl border-2 border-dashed border-yellow-300 flex flex-col items-center justify-center overflow-hidden"
                    >
                        {preview ? (
                            <img
                                src={preview}
                                alt="Profile Preview"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        ) : (
                            <>
                                <div className="w-20 h-20 rounded-full bg-yellow-200 flex items-center justify-center">
                                    <FaCamera size={20} className="text-[#D89B17]" />
                                </div>

                                <p className="mt-4 font-semibold">Upload Photo</p>
                                <span className="text-gray-400 text-sm">
                                    JPG, PNG up to 5MB
                                </span>
                            </>
                        )}

                        <input
                            id="image"
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={handleImageChange}
                        />
                    </label>
                </div>
                {/* Main Div Of Inputs */}
                <div className='xl:col-span-3 '>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 '>
                        {/* Inputs */}
                        <div className='flex flex-col p-3'>
                            <label className="block text-sm mb-2 font-bold text-gray-700">
                                FirstName
                            </label>
                            <div className='flex  items-center bg-white  shadow-xl mb-3'>
                                <FaUserAlt size={20} className="ml-5 text-[#D89D1E]  flex-shrink-0 " />
                                <input onChange={handleEveryChange} name='firstName' value={employee.firstName} type="text" placeholder='Enter First Name' className='outline-none p-3 2xl:p-6 text-xl 2xl:text-4xl' />
                            </div>
                        </div>
                        <div className='flex flex-col p-3'>
                            <label className="block text-sm mb-2 font-bold text-gray-700">
                                Last Name
                            </label>
                            <div className='flex  items-center bg-white  shadow-xl mb-3'>
                                <FaUserAlt size={20} className="ml-5 text-[#D89D1E]  flex-shrink-0 " />
                                <input onChange={handleEveryChange} value={employee.lastName} name='lastName' type="text" placeholder='Enter Last Name' className='outline-none p-3 2xl:p-6 text-xl 2xl:text-4xl' />
                            </div>
                        </div>
                        {/* Email Input Field */}
                        <div className='flex flex-col p-3'>
                            <label className="block text-sm mb-2 font-bold text-gray-700">
                                Email
                            </label>
                            <div className='flex  items-center bg-white  shadow-xl mb-3'>
                                <FaEnvelope size={20} className="ml-5 text-[#D89D1E]  flex-shrink-0 " />
                                <input onChange={handleEveryChange} value={employee.email} name='email' type="email" placeholder='Enter Email' className='outline-none p-3 2xl:p-6 text-xl 2xl:text-4xl' />
                            </div>
                        </div>
                        {/* Gender Input Field */}
                        <div className='flex flex-col p-3'>
                            <label className="block text-sm mb-2 font-bold text-gray-700">
                                Gender
                            </label>
                            <div className='flex flex-row items-center shadow-xl'>
                                {/* Icon */}
                                <FaUser size={20} className="ml-5 text-[#D89D1E] flex-shrink-0" />
                                <select onChange={handleEveryChange} value={employee.gender} name="gender" id="" className='flex bg-white  p-[12px] outline-none text-xl 2xl:text-4xl text-gray-400 peer' >
                                    <option disabled hidden className="text-gray-400" value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                        {/* National ID Input Field */}
                        <div className='flex flex-col p-3'>
                            <label className="block text-sm mb-2 font-bold text-gray-700">
                                National Id
                            </label>
                            <div className='flex  items-center bg-white  shadow-xl mb-3'>
                                <FaIdCard size={20} className="ml-5 text-[#D89D1E]  flex-shrink-0 " />
                                <input onChange={handleEveryChange} value={employee.nationalId} name='nationalId' type="email" placeholder='Enter National Id' className='outline-none p-3 2xl:p-6 text-xl 2xl:text-4xl' />
                            </div>
                        </div>
                        {/* Phone Number Input Field */}
                        <div className='flex flex-col p-3'>
                            <label className="block text-sm mb-2 font-bold text-gray-700">
                                PhoneNumber
                            </label>
                            <div className='flex  items-center bg-white  shadow-xl mb-3'>
                                <FaPhoneAlt size={20} className="ml-5 text-[#D89D1E]  flex-shrink-0 " />
                                <input onChange={handleEveryChange} value={employee.phoneNumber} name='phoneNumber' type="email" placeholder='Enter Phone Number' className='outline-none p-3 2xl:p-6 text-xl 2xl:text-4xl' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PersonalInfo