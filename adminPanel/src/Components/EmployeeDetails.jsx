import React from 'react'
import { FaUser } from 'react-icons/fa6'
import { DetailEmp, employees } from '../assets/assets'
import { BsBriefcaseFill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { PiPencilLineFill } from "react-icons/pi";

const EmployeeDetails = () => {
    return (

        <div className='  bg-white flex items-start  p-4'>
            {/** Employee Details */}
            <div className='w-full h-auto border border-yellow-500 relative   overflow-hidden shadow-2xl rounded-xl'>
                {/** Close Button */}
                <button className='  absolute top-1 right-4 text-lg'>x</button>
                {/** Header Details */}

                <div className='flex  items-center gap-2 p-4 '>
                    <FaUser className='text-lg text-yellow-500' />
                    <h2 className='text-xl font-bold text-yellow-500 '>Employee Details</h2>
                </div>
                {
                    DetailEmp.map((employe) => (

                        <div>
                            <div key={employe.id} className='flex flex-row gap-5  lg:m-5 shadow-xl p-4'>
                                {/** Profile  Details */}
                                <div className='flex gap-4'>
                                    <img
                                        src={employe.image}
                                        alt=""
                                        className='w-20 h-20 rounded-full object-cover ' />

                                </div>
                                {/** Active Status */}
                                <div className='space-y-1'>
                                    <div className='  flex items-center justify-start gap-1 w-full'>
                                        <span className='w-2  h-2 rounded-full bg-green-500'></span>
                                        <span className='text-green-500 text-xs'>{employe.employmentStatus}</span>
                                    </div>
                                    <h3>{employe.firstName}{" "}{employe.lastName}</h3>
                                    <p className='text-xs text-yellow-500'>{employe.jobTitle}</p>
                                    <div className='bg-yellow-100'>
                                        <p className='text-xs text-yellow-700'>{employe.unit}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {/** Personal Info */}
                                <Title icon={<FaUser size={14} />} title="Personal Info">
                                    <InfoRow label="FirstName" value={employe.firstName} />
                                    <InfoRow label="Last Name" value={employe.lastName} />
                                    <InfoRow label="Phone Number" value={employe.phoneNumber} />
                                    <InfoRow label="National Id" value={employe.nationalId} />
                                    <InfoRow label="Gender" value={employe.gender} />
                                    <InfoRow label="Computer Assigned" value={employe.computerAssigned} />
                                </Title>
                                {/** Job Info */}
                                <Title icon={<BsBriefcaseFill size={14} />} title="Job Info">
                                    <InfoRow label="Job Title" value={employe.jobTitle} />
                                    <InfoRow label="Unit/Department" value={employe.unit} />
                                    <InfoRow label="Employment Status" value={employe.employmentStatus} />
                                    <InfoRow label="Date Of Employment" value={employe.dateOfEmployment} />
                                </Title>
                                {/** Education Info */}
                                <Title icon={<FaUser size={14} />} title="Education Info">
                                    <InfoRow label="Education Level" value={employe.educationLevel} />
                                    <InfoRow label="Specialization" value={employe.specialization} />
                                </Title>
                                {/** Location Info */}
                                <Title icon={<FaUserGraduate size={14} />} title="Job Info">
                                    <InfoRow label="District" value={employe.district} />
                                    <InfoRow label="sector" value={employe.sector} />
                                    <InfoRow label="cell" value={employe.cell} />
                                    <InfoRow label="vilage" value={employe.village} />
                                </Title>
                                {/** Next of Kin Info */}
                                <Title icon={<FaUser size={14} />} title="Next of Kin">
                                    <InfoRow label="Next Of Kin" value={employe.nextOfKin} />
                                    <InfoRow label="Phone Number" value={employe.nextOfKinPhone} />
                                    <InfoRow label="RelationShip" value={employe.relationshipWithNextOfKin} />

                                </Title>
                                <div className='w-full flex items-center justify-center'>
                                    <button className='mt-6 mb-7 w-4/5 bg-yellow-500 text-white py-1 rounded-md flex items-center justify-center gap-2  '>
                                        <PiPencilLineFill />
                                        Edit Employee
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

function InfoRow({ label, value }) {
    return (
        <div className='grid grid-cols-2 text-sm pl-3 pt-1'>
            <span className='text-gray-500 ' >{label}</span>
            <span className='font-medium  text-gray-500 '>{value}</span>
        </div>
    )
}

function Title({ icon, title, children }) {
    return (
        <div className='mt-6'>
            <div className='flex items-center gap-2 pl-3 text-yellow-500 '>
                {icon} <span className='text-lg'>{title}</span>
            </div>
            {children}
        </div>
    )
}

export default EmployeeDetails