import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../Context/adminContext'
import { Outlet } from 'react-router-dom'
import LeftNavbar from '../Components/LeftNavbar'


const Dashbord = () => {

    const { token, navigate } = useContext(AdminContext)

    // Sidebar state
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true)


    // ============================================================
    // CHECK LOGIN
    // ============================================================

    useEffect(() => {

        if (!token) {
            navigate("/")
        }

    }, [token, navigate])


    return (

        <div className="min-h-screen">

            {/* ====================================================
                LEFT NAVBAR
            ===================================================== */}

            <LeftNavbar
                isExpanded={isSidebarExpanded}
                setIsExpanded={setIsSidebarExpanded}
            />


            {/* ====================================================
                MAIN CONTENT
            ===================================================== */}

            <main
                className={`
        min-h-screen
        min-w-0
        transition-all
        duration-300
        ${isSidebarExpanded ? "ml-60" : "ml-[72px]"}
    `}
            >
                <Outlet
                    context={{
                        isExpanded: isSidebarExpanded,
                        setIsExpanded: setIsSidebarExpanded
                    }}
                />
            </main>

        </div>

    )
}

export default Dashbord