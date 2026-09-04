import React, { useContext, useEffect } from 'react'
import MiddleComponent from '../Components/MiddleComponent'
import EmployeeDetails from '../Components/EmployeeDetails'
import LeftNavbar from '../Components/LeftNavbar'
import { AdminContext } from '../Context/adminContext'
import { Outlet } from 'react-router-dom'

const Dashbord = () => {
    const { token, setToken, navigate } = useContext(AdminContext)
    useEffect(() => {
        if (!token) {
            navigate("/")
        }
    }, [token])
    return (
        <div className='flex flex-row'>
            {/** Left Navigator Bar Div */}
            <div>
                <LeftNavbar />
            </div>
            {/** MIDDLE COMPONENT CHANDED BY LEFTSIDE NAVS  */}
            <main className='ml-60 min-w-0 flex-1'>
                <Outlet />
            </main>

        </div>
    )
}

export default Dashbord