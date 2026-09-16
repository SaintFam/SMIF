import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets, DetailEmp } from '../assets/assets'

import { FaUser } from "react-icons/fa"
import { IoMdHome } from "react-icons/io"
import { RiComputerFill } from "react-icons/ri"
import { FaFileAlt } from "react-icons/fa"
import { FaUserShield } from "react-icons/fa"
import { IoSettingsOutline } from "react-icons/io5"
import { IoIosLogOut } from "react-icons/io"
import { IoMenu } from "react-icons/io5"
import { IoChevronBack } from "react-icons/io5"


const menuItems = [
    {
        name: "DashBoard",
        icon: <IoMdHome />,
        path: "/dashbord",
        end: true
    },
    {
        name: "Employees",
        icon: <FaUser />,
        path: "/dashbord/employees"
    },
    {
        name: "Computer Assign",
        icon: <RiComputerFill />,
        path: "/dashbord/computerassign"
    },
    {
        name: "Report",
        icon: <FaFileAlt />,
        path: "/dashbord/report"
    },
    {
        name: "Users & Roles",
        icon: <FaUserShield />,
        path: "/dashbord/users-roles"
    },
    {
        name: "Settings",
        icon: <IoSettingsOutline />,
        path: "/dashbord/settings"
    },
]


const LeftNavbar = ({ isExpanded, setIsExpanded }) => {

    return (

        <aside
            className={`
                fixed
                left-0
                top-0
                h-screen
                z-50
                flex
                flex-col
                bg-gradient-to-l
                from-yellow-400
                to-yellow-700
                shadow-xl
                transition-all
                duration-300
                ease-in-out
                ${isExpanded ? "w-60" : "w-[72px]"}
            `}
        >

            {/* =====================================================
                TOP SECTION
            ====================================================== */}

            <div
                className={`
                    flex
                    items-center
                    border-b
                    border-white/20
                    transition-all
                    duration-300
                    ${isExpanded
                        ? "justify-between px-3 py-3"
                        : "justify-center py-3"
                    }
                `}
            >

                {/* Logo + Title */}
                <div
                    className={`
                        flex
                        items-center
                        transition-all
                        duration-300
                        ${isExpanded ? "gap-2" : "justify-center"}
                    `}
                >

                    <img
                        src={assets.sidebarLogo}
                        alt="SMIS Logo"
                        className={`
                            object-contain
                            transition-all
                            duration-300
                            ${isExpanded
                                ? "w-14 h-14"
                                : "w-12 h-12"
                            }
                        `}
                    />

                    {/* Hide title when collapsed */}
                    <div
                        className={`
                            text-white
                            overflow-hidden
                            whitespace-nowrap
                            transition-all
                            duration-300
                            ${isExpanded
                                ? "w-auto opacity-100"
                                : "w-0 opacity-0"
                            }
                        `}
                    >

                        <h2 className="font-bold text-lg leading-tight">
                            Iwawa
                        </h2>

                        <p className="text-xs font-light">
                            Rehabilitation Center
                        </p>

                        <p className="text-xs font-light">
                            SMIS Dashboard
                        </p>

                    </div>

                </div>


                {/* Collapse / Expand Button */}

                <button
                    type="button"
                    onClick={() => setIsExpanded(!isExpanded)}
                    aria-label={
                        isExpanded
                            ? "Collapse sidebar"
                            : "Expand sidebar"
                    }
                    title={
                        isExpanded
                            ? "Collapse sidebar"
                            : "Expand sidebar"
                    }
                    className={`
                        flex
                        items-center
                        justify-center
                        rounded-lg
                        text-white
                        hover:bg-white
                        hover:text-yellow-700
                        transition-all
                        duration-200
                        ${isExpanded
                            ? "w-8 h-8"
                            : "w-10 h-10 mt-1"
                        }
                    `}
                >

                    {isExpanded
                        ? <IoChevronBack className="text-xl" />
                        : <IoMenu className="text-2xl" />
                    }

                </button>

            </div>


            {/* =====================================================
                MENU ITEMS
            ====================================================== */}

            <nav
                className={`
                    mt-5
                    space-y-2
                    transition-all
                    duration-300
                    ${isExpanded
                        ? "px-4"
                        : "px-2"
                    }
                `}
            >

                {menuItems.map((item) => (

                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.end}
                        title={!isExpanded ? item.name : undefined}

                        className={({ isActive }) => `
                            group
                            relative
                            flex
                            items-center
                            h-11
                            rounded-xl
                            transition-all
                            duration-200

                            ${isExpanded
                                ? "gap-3 px-4"
                                : "justify-center px-0"
                            }

                            ${isActive
                                ? "bg-white text-yellow-700 shadow-sm"
                                : "text-white hover:bg-white hover:text-yellow-700"
                            }
                        `}
                    >

                        {/* Icon */}

                        <span
                            className={`
                                flex
                                items-center
                                justify-center
                                shrink-0
                                transition-all
                                duration-300
                                ${isExpanded
                                    ? "text-lg"
                                    : "text-xl"
                                }
                            `}
                        >
                            {item.icon}
                        </span>


                        {/* Menu Name */}

                        <span
                            className={`
                                whitespace-nowrap
                                overflow-hidden
                                transition-all
                                duration-300
                                ${isExpanded
                                    ? "w-auto opacity-100"
                                    : "w-0 opacity-0"
                                }
                            `}
                        >
                            {item.name}
                        </span>


                        {/* Custom tooltip when collapsed */}

                        {!isExpanded && (

                            <span
                                className="
                                    absolute
                                    left-16
                                    top-1/2
                                    -translate-y-1/2
                                    ml-2
                                    whitespace-nowrap
                                    rounded-md
                                    bg-gray-900
                                    px-3
                                    py-2
                                    text-xs
                                    text-white
                                    opacity-0
                                    pointer-events-none
                                    group-hover:opacity-100
                                    transition-opacity
                                    duration-200
                                    z-[100]
                                "
                            >
                                {item.name}
                            </span>

                        )}

                    </NavLink>

                ))}

            </nav>


            {/* =====================================================
                BOTTOM SECTION
            ====================================================== */}

            <div className="mt-auto pb-4">


                {/* =================================================
                    LOGOUT
                ================================================== */}

                <button
                    type="button"
                    title={!isExpanded ? "Logout" : undefined}
                    className={`
                        group
                        relative
                        flex
                        items-center
                        h-11
                        w-full
                        text-white
                        hover:bg-white
                        hover:text-yellow-700
                        transition-all
                        duration-200
                        ${isExpanded
                            ? "gap-3 px-5"
                            : "justify-center px-0"
                        }
                    `}
                >

                    <IoIosLogOut className="text-xl shrink-0" />

                    <span
                        className={`
                            whitespace-nowrap
                            overflow-hidden
                            transition-all
                            duration-300
                            ${isExpanded
                                ? "w-auto opacity-100"
                                : "w-0 opacity-0"
                            }
                        `}
                    >
                        Logout
                    </span>


                    {/* Logout tooltip */}

                    {!isExpanded && (

                        <span
                            className="
                                absolute
                                left-16
                                top-1/2
                                -translate-y-1/2
                                ml-2
                                whitespace-nowrap
                                rounded-md
                                bg-gray-900
                                px-3
                                py-2
                                text-xs
                                text-white
                                opacity-0
                                pointer-events-none
                                group-hover:opacity-100
                                transition-opacity
                                duration-200
                                z-[100]
                            "
                        >
                            Logout
                        </span>

                    )}

                </button>


                {/* =================================================
                    EMPLOYEE PROFILE
                ================================================== */}

                {DetailEmp.map((employee) => (

                    <div
                        key={`${employee.firstName}-${employee.lastName}`}
                        className={`
                            transition-all
                            duration-300
                            ${isExpanded
                                ? "mx-5 mt-4"
                                : "mt-3 flex justify-center"
                            }
                        `}
                    >

                        {isExpanded ? (

                            /* ===============================
                               EXPANDED PROFILE CARD
                            ================================ */

                            <div
                                className="
                                    shadow-lg
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    rounded-3xl
                                    p-4
                                    bg-white/20
                                    backdrop-blur-lg
                                    border
                                    border-white/10
                                "
                            >

                                <img
                                    src={employee.image}
                                    alt={`${employee.firstName} ${employee.lastName}`}
                                    className="
                                        w-20
                                        h-20
                                        rounded-full
                                        object-cover
                                        border-2
                                        border-white/50
                                    "
                                />

                                <h1
                                    className="
                                        text-xl
                                        font-bold
                                        text-white
                                        mt-2
                                        text-center
                                        whitespace-nowrap
                                    "
                                >
                                    {employee.firstName}{" "}
                                    {employee.lastName}
                                </h1>

                                <p
                                    className="
                                        text-white
                                        text-sm
                                        text-center
                                    "
                                >
                                    {employee.jobTitle}
                                </p>

                                <div className="flex gap-2 items-center mt-1">

                                    <span
                                        className="
                                            rounded-full
                                            bg-green-500
                                            h-3
                                            w-3
                                        "
                                    />

                                    <span className="text-white text-sm">
                                        Online
                                    </span>

                                </div>

                            </div>

                        ) : (

                            /* ===============================
                               COLLAPSED PROFILE
                            ================================ */

                            <div className="relative group">

                                <img
                                    src={employee.image}
                                    alt={`${employee.firstName} ${employee.lastName}`}
                                    title={`${employee.firstName} ${employee.lastName}`}
                                    className="
                                        w-11
                                        h-11
                                        rounded-full
                                        object-cover
                                        border-2
                                        border-white
                                    "
                                />

                                {/* Online indicator */}

                                <span
                                    className="
                                        absolute
                                        bottom-0
                                        right-0
                                        w-3
                                        h-3
                                        rounded-full
                                        bg-green-500
                                        border-2
                                        border-yellow-600
                                    "
                                />

                                {/* Profile tooltip */}

                                <span
                                    className="
                                        absolute
                                        left-14
                                        top-1/2
                                        -translate-y-1/2
                                        ml-2
                                        whitespace-nowrap
                                        rounded-md
                                        bg-gray-900
                                        px-3
                                        py-2
                                        text-xs
                                        text-white
                                        opacity-0
                                        pointer-events-none
                                        group-hover:opacity-100
                                        transition-opacity
                                        duration-200
                                        z-[100]
                                    "
                                >
                                    {employee.firstName}{" "}
                                    {employee.lastName}
                                </span>

                            </div>

                        )}

                    </div>

                ))}

            </div>

        </aside>
    )
}

export default LeftNavbar