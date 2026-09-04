import React, { useContext, useState } from 'react'

import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { CompEmployees, employees } from '../assets/assets';
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineNavigateNext } from "react-icons/md";
import { AdminContext } from '../Context/adminContext';





function StatusBadge({ status }) {
    const styles = {
        Assigned: "bg-green-50 text-green-600",
        Maintenance: "bg-blue-50 text-blue-600",
        "Not Assigned": "bg-gray-100 text-gray-600",
    };

    return (
        <span
            className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium ${styles[status]
                }`}
        >
            <span
                className={`h-2 w-2 rounded-full ${status === "Assigned"
                    ? "bg-green-500"
                    : status === "Maintenance"
                        ? "bg-blue-500"
                        : "bg-gray-500"
                    }`}
            />

            {status}
        </span>
    );
}


const ComputerAssigned = () => {

    // Stores the page we are currently viewing
    const [currentPage, setCurrentPage] = useState(1);
    // Number of employees displayed on one page
    const employeesPerPage = 6;
    // Calculate total number of pages
    const totalPages = Math.ceil(
        CompEmployees.length / employeesPerPage
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
        <div className='min-h-screen p-6 '>
            <div className='space-y-8 '>
                <div className=''>

                    <h1 className='text-3xl font-bold text-yellow-500'>
                        Computer Assignment
                    </h1>

                    <p className='text-gray-500 mt-1'>
                        Manage Computers assigned to Employees
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
                    <button
                        onClick={() => { navigate("/register") }}
                        className='flex items-center justify-center gap-2 px-5 py-2 bg-yellow-500 hover:bg-yellow-700 text-white rounded-lg'>

                        <GoPlus />

                        <span>
                            Assign Computer
                        </span>

                    </button>

                </div>
            </div>

            <div className='bg-white p-4 '>
                <div className='overflow-hidden border border-gray-300 rounded-xl bg-white shadow-sm'>
                    {/** Table */}
                    <div className='overflow-x-auto'>
                        <table className='w-full min-w-[750px] border-collapse'>
                            {/** Table  Headers*/}
                            <thead>
                                <tr className='text-gray-400'>
                                    <th className='w-[25%] text-sm px-5 py-5 text-left font-semibold '>Employees</th>
                                    <th className='w-[33%] text-sm px-5 py-5 text-left font-semibold '>Computer Details</th>
                                    <th className='w-[15%] text-sm px-5 py-5 text-left font-semibold '>Status</th>
                                    <th className='w-[20%] text-sm px-5 py-5 text-left font-semibold '>Date Assigned</th>
                                    <th className='w-[9%] text-sm px-5 py-5 text-left font-semibold '>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {CompEmployees.map((employee) => (
                                    <tr key={employee.id} className=''>
                                        <td className='px-2 py-5 flex flex-row gap-2 '>
                                            <div className='flex items-center gap-4'>
                                                <img src={employee.employeeImage} alt=""
                                                    className='w-10 h-10 rounded-full' />
                                            </div>
                                            <div className='text-sm flex flex-col gap-1'>
                                                <p>{employee.name}</p>
                                                <p className='text-gray-500 text-xs'>{employee.role}</p>
                                            </div>
                                        </td>
                                        {/** ---------------------Computer Details-------------------------- */}
                                        <td className=''>
                                            {employee.computer ? (
                                                <div className='flex items-center px-2 gap-4 '>
                                                    <div className='flex h-10 w-10 items-center justify-center '>
                                                        <img src={employee.computerImage} alt="" className='max-h-10 max-w-10 object-contain' />
                                                    </div>
                                                    {/** Computer Info */}
                                                    <div>
                                                        <p className="text-sm font-semibold text-gray-800">
                                                            {employee.computer}
                                                        </p>
                                                        <p className="mt-1 text-[10px] text-gray-500">
                                                            SN: {employee.serial} • {employee.os}
                                                        </p>
                                                        <span className="text-[9px] inline-block rounded-md bg-yellow-100 px-2 py-1  font-medium text-yellow-700">
                                                            {employee.specs}
                                                        </span>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="flex w-fit items-center gap-3 rounded-lg border border-gray-200 px-5 py-3">
                                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50">
                                                        <svg
                                                            className="h-6 w-6 text-gray-400"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="1.5"
                                                                d="M4 5h16v11H4zM8 20h8M12 16v4"
                                                            />
                                                        </svg>
                                                    </div>

                                                    <div>
                                                        <p className="text-sm text-gray-500">
                                                            No Computer Assigned
                                                        </p>

                                                        <button className="mt-1 text-sm font-medium text-yellow-600 hover:text-yellow-700">
                                                            Assign Computer
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </td>
                                        {/* ================= STATUS ================= */}
                                        <td className="px-5 py-5">
                                            <StatusBadge status={employee.status} />
                                        </td>

                                        {/* ================= DATE ================= */}
                                        <td className="px-5 py-5 text-sm text-gray-600">
                                            {employee.date}
                                        </td>
                                        {/* ================= ACTION ================= */}
                                        <td className="px-5 py-5 text-center">
                                            {employee.status === "Not Assigned" ? (
                                                <button
                                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-yellow-400 text-xl text-yellow-50 transition hover:bg-yellow-50"
                                                >
                                                    +
                                                </button>
                                            ) : (
                                                <button
                                                    className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg border border-yellow-400 text-lg font-bold text-yellow-500 transition hover:bg-yellow-50"
                                                    aria-label="Computer actions"
                                                >
                                                    <BsThreeDots className="h-5 w-5" />
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
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
    )
}

export default ComputerAssigned