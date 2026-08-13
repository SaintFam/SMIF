import React from 'react'
import { assets, DetailEmp } from '../assets/assets'
import { FaUser } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { RiComputerFill } from "react-icons/ri";
import { FaFileAlt } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const menuItems = [
    { name: "DashBoard", icon: <IoMdHome /> },
    { name: "Employees", icon: <FaUser />, active: true },
    { name: "Computer Assign", icon: <RiComputerFill /> },
    { name: "Report", icon: <FaFileAlt /> },
    { name: "Users & Roles", icon: <FaUserShield /> },
    { name: "Settings", icon: <IoSettingsOutline /> },


]


const LeftNavbar = () => {
    return (
        <div className='fixed  w-60 h-screen flex flex-col  bg-gradient-to-l from-yellow-400 to-yellow-700'>
            {/** Top Header */}
            <div className=' flex flex-row p-2'>
                <div className='flex items-center justify-center p-1'>
                    <img src={assets.sidebarLogo} alt="" className='w-17 h-16 ' />
                </div>
                <div className='text-white'>
                    <h2 className='font-bold text-lg'>Iwawa</h2>
                    <p className='text-sm font-light'>Rehabilitation Center</p>
                    <p className='text-sm font-light'>SMIS Dashbord</p>
                </div>
            </div>

            {/** Menu Items  */}
            <div className='mt-5 px-4 space-y-2'>
                {menuItems.map((item, index) => (
                    <button className={`w-full hover:transition hover:duration-300 
                        hover:bg-white hover:text-yellow-700 flex rounded-xl items-center gap-3 px-4 py-1 
                    ${item.active ? "bg-white text-yellow-700" : "text-white"}`} key={index} >
                        <span >{item.icon}</span>
                        <span>{item.name}</span>
                    </button>
                ))
                }
            </div>
            <div className='flex flex-col h-full justify-end'>
                <div className='flex flex-row text-white items-center gap-3 pl-5'>
                    <span><IoIosLogOut /></span>
                    <span><h3>Logout</h3></span>
                </div>
                {DetailEmp.map((employee) => (
                    <div className='shadow-lg m-5 flex flex-col items-center justify-center rounded-3xl p-5 bg-white/20 backdrop-blur-lg border border-white/10'>
                        <img src={employee.image} alt="" className='w-20 h-20 rounded-full object-cover' />
                        <h1 className='text-2xl font-bold text-white mt-2'>{employee.firstName}{" "}{employee.lastName}</h1>
                        <p className='text-white text-md'>{employee.jobTitle}</p>
                        <div className='flex gap-2 items-center '>
                            <span className='rounded-full bg-green-700 h-3 w-3 '></span>
                            <span className='text-white '>Online</span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default LeftNavbar