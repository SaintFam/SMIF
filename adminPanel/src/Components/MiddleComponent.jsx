import React, { useState } from 'react'

import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { employees } from '../assets/assets';
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineNavigateNext } from "react-icons/md";


const MiddleComponent = () => {

    // Stores the page we are currently viewing
    const [currentPage, setCurrentPage] = useState(1);


    // Number of employees displayed on one page
    const employeesPerPage = 6;


    // Calculate total number of pages
    const totalPages = Math.ceil(
        employees.length / employeesPerPage
    );


    const startIndex = (currentPage - 1) * employeesPerPage;


    // Get only employees for the current page
    const currentEmployees = employees.slice(
        startIndex,
        startIndex + employeesPerPage
    );




    const goToPreviousPage = () => {

        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }

    };




    const goToNextPage = () => {

        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }

    };




    const getPageNumbers = () => {

        const pages = [];


        // If there are 7 or fewer pages,
        // show every page number.
        if (totalPages <= 7) {

            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }

            return pages;
        }


        // Always show page 1
        pages.push(1);

        // CURRENT PAGE IS NEAR THE BEGINNING

        if (currentPage <= 4) {

            pages.push(2);
            pages.push(3);
            pages.push(4);
            pages.push(5);

            pages.push("...");

            pages.push(totalPages);
        }



        // CURRENT PAGE IS IN THE MIDDLE


        else if (
            currentPage > 4 &&
            currentPage < totalPages - 3
        ) {

            pages.push("...");

            // Page before current page
            pages.push(currentPage - 1);

            // Current page
            pages.push(currentPage);

            // Page after current page
            pages.push(currentPage + 1);

            pages.push("...");

            // Last page
            pages.push(totalPages);
        }


        // CURRENT PAGE IS NEAR THE END

        else {

            pages.push("...");

            pages.push(totalPages - 4);
            pages.push(totalPages - 3);
            pages.push(totalPages - 2);
            pages.push(totalPages - 1);
            pages.push(totalPages);
        }


        return pages;
    };


    return (
        <div>

            {/** Middle Component */}
            <div className='ml-60 min-h-screen p-6 z-20'>

                <div className='space-y-8'>



                    <div>

                        <h1 className='text-3xl font-bold text-yellow-500'>
                            All Employee
                        </h1>

                        <p className='text-gray-500 mt-1'>
                            Manage and view all registered employees
                        </p>

                    </div>



                    <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>

                        <div className='flex flex-col sm:flex-row items-center gap-3 flex-1'>

                            {/** SearchBar input */}
                            <div className='relative w-full'>

                                <input
                                    className='w-full pl-4 pr-10 py-2 bg-white border border-yellow-500 rounded-lg focus:outline-none shadow-lg'
                                    type="text"
                                    placeholder='search by name , email or jobTitle'
                                />

                                <CiSearch className='absolute w-5 h-5 right-3 top-3 text-gray-500' />

                            </div>


                            {/** Unit Select DropDown */}
                            <div className='relative w-full'>

                                <select
                                    className='w-full appearance-none pl-4 pr-18 py-2 bg-white border border-yellow-500 text-gray-600 rounded-lg focus:outline-none'
                                    name=""
                                    id=""
                                >

                                    <option value="">Unit</option>
                                    <option value="">Administration</option>
                                    <option value="">Vacation Training</option>
                                    <option value="">Healthcare</option>

                                </select>

                                <RiArrowDropDownLine className='h-10 w-10 absolute right-1 top-1 text-gray-500' />

                            </div>


                            {/** Employment Status DropDown */}
                            <div className='relative w-full'>

                                <select
                                    className='w-full appearance-none pl-4 pr-18 py-2 bg-white border border-yellow-500 text-gray-600 rounded-lg focus:outline-none'
                                    name=""
                                    id=""
                                >

                                    <option value="">Employment Status</option>
                                    <option value="">Active</option>
                                    <option value="">Inactive</option>

                                </select>

                                <RiArrowDropDownLine className='h-10 w-10 absolute right-1 top-1 text-gray-500' />

                            </div>

                        </div>


                        {/** Add Employee Button */}
                        <button className='flex items-center justify-center gap-2 px-5 py-2 bg-yellow-500 hover:bg-yellow-700 text-white rounded-lg'>

                            <GoPlus />

                            <span>
                                Add Employee
                            </span>

                        </button>

                    </div>



                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                        {
                            currentEmployees.map((employee) => (

                                <div
                                    key={employee.id}
                                    className='relative bg-white border border-yellow-400 rounded-xl p-6 flex flex-col items-center text-center shadow-lg overflow-hidden'
                                >

                                    {/** Active Status */}
                                    <div className='absolute top-4 right-4 flex items-center gap-1'>

                                        <span className='w-2 h-2 rounded-full bg-green-500'></span>

                                        <span className='text-green-500 text-xs'>
                                            {employee.employmentStatus}
                                        </span>

                                    </div>


                                    {/** Profile Image */}
                                    <div className='mt-2 mb-4'>

                                        <img
                                            src={employee.image[0]}
                                            alt={employee.name}
                                            className='w-30 h-30 rounded-full object-cover overflow-auto'
                                        />

                                    </div>


                                    {/** Employee Info */}
                                    <h2 className='text-lg text-black font-semibold text-gray-800'>
                                        {employee.firstName}
                                    </h2>

                                    <p className='text-gray-600 text-md'>
                                        {employee.jobTitle}
                                    </p>


                                    {/** Employee Unit */}
                                    <div className='mt-2'>

                                        <span className='line-clamp-1 bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded'>
                                            {employee.unit}
                                        </span>

                                    </div>


                                    {/** Contact Info */}
                                    <div className='w-full pt-4 space-y-2 text-left border-t border-gray-200'>

                                        <div className='flex items-center gap-2'>

                                            <div>
                                                <CiMail className='text-gray-500' />
                                            </div>

                                            <span className='text-gray-600 text-sm'>
                                                {employee.email}
                                            </span>

                                        </div>


                                        <div className='flex items-center gap-2'>

                                            <FaPhone className='text-gray-500' />

                                            <span className='text-gray-600 text-sm'>
                                                {employee.phoneNumber}
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            ))
                        }

                    </div>




                    <div className='flex items-center justify-center gap-2 mt-8'>




                        <button
                            onClick={goToPreviousPage}

                            // Disabled when we are already on page 1
                            disabled={currentPage === 1}

                            className='w-10 h-10 flex items-center justify-center border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed'
                        >

                            <IoIosArrowBack />

                        </button>




                        {
                            getPageNumbers().map((page, index) => {

                                // If page is "..."
                                // render span instead of button
                                if (page === "...") {

                                    return (
                                        <span
                                            key={`dots-${index}`}
                                            className='w-10 h-10 flex items-center justify-center text-gray-500'
                                        >
                                            ...
                                        </span>
                                    );
                                }


                                // Normal page number button
                                return (
                                    <button
                                        key={page}

                                        onClick={() => setCurrentPage(page)}

                                        className={`
                                            w-10 h-10 rounded-lg text-sm border

                                            ${currentPage === page
                                                ? 'bg-yellow-500 text-white border-yellow-500'
                                                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-100'
                                            }
                                        `}
                                    >
                                        {page}
                                    </button>
                                );

                            })
                        }




                        <button
                            onClick={goToNextPage}

                            // Disabled when we are already on the last page
                            disabled={currentPage === totalPages}

                            className='w-10 h-10 flex items-center justify-center border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed'
                        >

                            <MdOutlineNavigateNext />

                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}


export default MiddleComponent