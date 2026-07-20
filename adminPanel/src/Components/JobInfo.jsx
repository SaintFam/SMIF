import React from 'react'

import {
    FaUserAlt,
    FaSuitcase,
    FaUser,
    FaLock,
    FaCamera,
    FaPhoneAlt,
    FaEnvelope,
    FaIdCard,
} from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { TfiAgenda } from "react-icons/tfi";
import { FcDepartment } from "react-icons/fc"

const JobInfo = ({ employee, setEmployee }) => {
    const handleEveryChange = (e) => {
        console.log(e.target.name, e.target.value)
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
                <h1 className='text-3xl font-semibold text-[#D89B17]'>Job Information</h1>
            </div>
            {/* Content division */}
            <div className='grid grid-cols-1 xl:grid-cols-4 gap-8  '>
                {/* Profile Picture division */}

                {/* Main Div Of Inputs */}
                <div className='xl:col-span-4 '>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                        {/* Inputs */}
                        {/* Date of Employment Input Field */}
                        <div className='flex flex-col p-3'>
                            <label className="block text-sm mb-2 font-bold text-gray-700">
                                Date of Employment
                            </label>
                            <div className='flex flex-row items-center shadow-xl'>
                                {/* Icon */}
                                <CiCalendarDate size={23} className="ml-5 text-[#D89D1E] flex-shrink-0" />
                                <input name="dateOfEmployment"
                                    value={employee.dateOfEmployment}
                                    onChange={handleEveryChange} type='date' className='flex bg-white  p-[12px] outline-none text-xl 2xl:text-4xl text-gray-400 peer' placeholder='Date' />

                            </div>
                        </div>
                        {/* Job Title */}
                        <div className=" flex flex-col p-3">
                            <label className="block text-sm mb-2 font-bold">Job Title</label>
                            <div className="flex  flex-row items-center shadow-xl p-2 rounded-[1em]">
                                <FaSuitcase size={20} className="text-[#d89b17]" />
                                <select
                                    className="flex-1 p-[12px] min-w-0 text-gray-400 text-3xl outline-none"

                                    name="jobTitle"
                                    value={employee.jobTitle}
                                    onChange={handleEveryChange}
                                    id=""
                                >
                                    <option value="">Select Position</option>
                                    <option value="Coordinator">Coordinator</option>
                                    <option value=" Director of Health and Social Rehabilitation">
                                        Director of Health and Social Rehabilitation
                                    </option>
                                    <option value="Director of Vocational Training<">
                                        Director of Vocational Training
                                    </option>
                                    <option value="Clinical Psychology">
                                        Clinical Psychology
                                    </option>
                                    <option value="Trainer">Trainer</option>
                                    <option value="Assistant Trainer">Assistant Trainer</option>
                                    <option value="Mental Nurse Officer">
                                        Mental Nurse Officer
                                    </option>
                                    <option value="Community Environmental Health Officer">
                                        Community Environmental Health Officer
                                    </option>
                                    <option value="Database and ICT">Database and ICT</option>
                                    <option value="Chief Cook">Chief Cook</option>
                                    <option value="Cook">Cook</option>
                                    <option value="Nurse">Nurse</option>
                                    <option value="Laboratory Technician">
                                        Laboratory Technician
                                    </option>
                                    <option value="Electrician">Electrician</option>
                                    <option value="Logistic Officer">Logistic Officer</option>
                                    <option value="Production Officer">Production Officer</option>
                                    <option value="Navigator">Navigator</option>
                                    <option value="Patient Attendant">Patient Attendant</option>
                                </select>
                            </div>
                        </div>
                        {/* Unit/Departement Input Field */}
                        <div className=" flex flex-col p-3">
                            <label className="block text-sm mb-2 font-bold">
                                Unit/Department
                            </label>
                            <div className="flex  flex-row items-center shadow-xl p-2 rounded-[1em]">
                                <FcDepartment size={30} className="text-[#d89b17]" />
                                <select
                                    className="flex-1 min-w-0 p-[12px] text-gray-400 text-3xl font-medium outline-none"
                                    value={employee.unit}
                                    onChange={handleEveryChange}
                                    name="unit"
                                    id=""
                                >
                                    <option value="">Select Unit</option>
                                    <option value="Administration">Administration</option>
                                    <option value="Health and Social Rehabilitation">
                                        Health and Social Rehabilitation
                                    </option>
                                    <option value="Vocational Training">
                                        Vocational Training
                                    </option>
                                </select>
                            </div>
                        </div>
                        {/* Employment Status Input Field */}
                        <div className='flex flex-col p-3'>
                            <label className="block text-sm mb-2 font-bold text-gray-700">
                                Employment status
                            </label>
                            <div className='flex flex-row items-center shadow-xl'>
                                {/* Icon */}
                                <FaUser size={20} className="ml-5 text-[#D89D1E] flex-shrink-0" />
                                <select className='flex bg-white  p-[12px] outline-none text-xl 2xl:text-4xl text-gray-400 peer' onChange={handleEveryChange} value={employee.employmentStatus} name="employmentStatus" id="">
                                    <option disabled hidden className="text-gray-400" value="">Employment status</option>
                                    <option value="Active">Active</option>
                                    <option value="Not Active">Not Active</option>
                                </select>
                            </div>
                        </div>
                        {/* Unit/Departement Input Field */}
                        <div className='flex flex-col p-3'>
                            <label className="block text-sm mb-2 font-bold text-gray-700">
                                Computer Assigned
                            </label>
                            <div className='flex flex-row items-center shadow-xl'>
                                {/* Icon */}
                                <FaUser size={20} className="ml-5 text-[#D89D1E] flex-shrink-0" />
                                <select className='flex bg-white  p-[12px] outline-none text-xl 2xl:text-4xl text-gray-400 peer' onChange={handleEveryChange} value={employee.computerAssigned} name="computerAssigned" id="">
                                    <option disabled hidden className="text-gray-400" value="">Computer Assigned</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>)
}

export default JobInfo