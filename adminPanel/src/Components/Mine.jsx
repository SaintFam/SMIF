import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { employees } from '../assets/assets';
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";

const MiddleComponent = () => {
    // ⭐ PAGINATION CHANGE 2:
    // currentPage stores the page we are currently viewing.
    // Initially, we start on page 1.
    const [currentPage, setCurrentPage] = useState(1);


    // ⭐ PAGINATION CHANGE 3:
    // This determines how many employee cards should appear on one page.
    const employeesPerPage = 6;
    // ⭐ PAGINATION CHANGE 4:
    // Calculate the total number of pages.
    //
    // Example:
    // 30 employees / 6 employees per page = 5 pages
    //
    // Math.ceil() is important when the number doesn't divide exactly.
    const totalPages = Math.ceil(
        employees.length / employeesPerPage
    );


    // ⭐ PAGINATION CHANGE 5:
    // Calculate where the current page should start in the employees array.
    //
    // Page 1 → startIndex = 0
    // Page 2 → startIndex = 6
    // Page 3 → startIndex = 12
    const startIndex = (currentPage - 1) * employeesPerPage;
    // ⭐ PAGINATION CHANGE 6:
    // Get only the employees that belong to the current page.
    //
    // If currentPage = 1:
    // employees.slice(0, 6)
    //
    // If currentPage = 2:
    // employees.slice(6, 12)
    const currentEmployees = employees.slice(
        startIndex,
        startIndex + employeesPerPage
    );


    // ⭐ PAGINATION CHANGE 7:
    // Function for going to the previous page.
    const goToPreviousPage = () => {

        // Don't allow the page to go below 1.
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };


    // ⭐ PAGINATION CHANGE 8:
    // Function for going to the next page.
    const goToNextPage = () => {

        // Don't allow the page to go beyond the last page.
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // ⭐ PAGINATION CHANGE 9:
    // Creates the page numbers.
    //
    // If there are 6 or fewer pages:
    // 1 2 3 4 5 6
    //
    // If there are more than 6:
    // 1 2 3 4 5 ... 10
    const getPageNumbers = () => {

        const pages = [];

        if (totalPages <= 6) {

            // Show every page number.
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }

        } else {

            // Show first 5 pages.
            pages.push(1);
            pages.push(2);
            pages.push(3);
            pages.push(4);
            pages.push(5);

            // Show dots.
            pages.push("...");

            // Show the last page.
            pages.push(totalPages);
        }

        return pages;
    };



    return (
        <div>
            {/** Middle Component */}
            <div className=' ml-60 min-h-screen  p-6 z-20' >
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
                            currentEmployees.map((employee) => (
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
                                    <h2 className='text-lg text-black font-semibold text-gray-800'>{employee.firstName}</h2>
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
                <div ></div>
            </div>
        </div>
    )
}

export default MiddleComponent