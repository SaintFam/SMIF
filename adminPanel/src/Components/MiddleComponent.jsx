import React from 'react'
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { employees } from '../assets/assets';
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";

const MiddleComponent = () => {


    return (
        <div>
            {/** Middle Component */}
            <div className='min-h-screen  p-6 z-20' >
                <div className='space-y-8'>
                    {/* Header Section */}
                    <div>
                        <h1 className='text-3xl font-bold  text-yellow-500'>All Employee</h1>
                        <p className='text-gray-500 mt-1'>Manage and view all registered employees</p>
                    </div>
                    {/* Search bar / Filter Bar */}
                    <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 '>
                        <div className='flex flex-col sm:flex-row items-center gap-3 flex-1'>
                            {/** SearchBar input */}
                            <div className='relative w-full '>
                                <input
                                    className='w-full pl-4 pr-10 py-2 bg-white border border-yellow-500 rounded-lg focus:outline-none shadow-lg'
                                    type="text"
                                    placeholder='search by name , email or jobTitle'
                                />
                                <CiSearch className='absolute w-5 h-5 right-3 top-3 text-gray-500' />
                            </div>
                            {/** Unit Select DropDown */}
                            <div className='relative w-full '>
                                <select
                                    className='w-full appearance-none pl-4 pr-18 py-2 bg-white border border-yellow-500 text-gray-600 rounded-lg focus:outline-none'
                                    name="" id="">
                                    <option value="">Unit</option>
                                    <option value="">Administration</option>
                                    <option value="">Vacation Training</option>
                                    <option value="">Healthcare</option>
                                </select>
                                <RiArrowDropDownLine className='h-10 w-10 absolute right-1 top-1 text-gray-500' />
                            </div>
                            {/** Employment Status DropDown */}

                            <div className='relative w-full '>
                                <select
                                    className='w-full appearance-none pl-4 pr-18 py-2 bg-white border border-yellow-500 text-gray-600 rounded-lg focus:outline-none'
                                    name="" id="">
                                    <option value="">Employment Status</option>
                                    <option value="">Active</option>
                                    <option value="">Inactive</option>
                                </select>
                                <RiArrowDropDownLine className='h-10 w-10 absolute right-1 top-1 text-gray-500' />
                            </div>
                        </div>
                        {/** Add Employee Button */}
                        <button className='flex items-center justify-center gap-2 px-5 py-2 bg-yellow-500 hover:bg-yellow-700 text-white rounded-lg '>
                            <GoPlus /><span>Add Employee</span>
                        </button>
                    </div>
                    {/** Employee Cards */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6' >
                        {
                            employees.map((employee) => (
                                <div key={employee.id} className='relative bg-white border border-yellow-400 rounded-xl p-6 flex flex-col items-center text-center shadow-lg overflow-hidden'>
                                    {/** Active Status */}
                                    <div className='absolute top-4 right-4 flex items-center gap-1'>
                                        <span className='w-2 h-2 rounded-full bg-green-500'></span>
                                        <span className='text-green-500 text-xs'>{employee.employmentStatus}</span>
                                    </div>
                                    {/** Profile Image*/}
                                    <div className='mt-2 mb-4'>
                                        <img
                                            src={employee.image[0]}
                                            alt={employee.name}
                                            className='w-30 h-30 rounded-full object-cover overflow-auto'
                                        />
                                    </div>
                                    {/** Employee Info */}
                                    <h2 className='text-lg text-black font-semibold text-gray-800'>{employee.name}</h2>
                                    <p className='text-gray-600 text-md'>{employee.jobTitle}</p>
                                    {/** Employee Unit */}
                                    <div className='mt-2'>
                                        <span className='line-clamp-1 bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded'>
                                            {employee.unit}
                                        </span>
                                    </div>
                                    {/** Contact Info */}
                                    <div className='w-full  pt-4 space-y-2 text-left border-t border-gray-200'>
                                        <div className='flex items-center gap-2 '>
                                            <div><CiMail className='text-gray-500' /></div>
                                            <span className='text-gray-600 text-sm'>{employee.email}</span>
                                        </div>
                                        <div className='flex items-center gap-2 '>
                                            <FaPhone className='text-gray-500' />
                                            <span className='text-gray-600 text-sm'>{employee.phoneNumber}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddleComponent