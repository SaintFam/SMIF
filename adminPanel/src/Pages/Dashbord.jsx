import React from 'react'
import MiddleComponent from '../Components/MiddleComponent'
import EmployeeDetails from '../Components/EmployeeDetails'
import LeftNavbar from '../Components/LeftNavbar'

const Dashbord = () => {
    return (
        <div className='flex flex-row'>
            {/** Left Navigator Bar Div */}
            <div>
                <LeftNavbar />
            </div>
            {/** Middle And Detail  Div */}
            <div className='grid grid-cols-[3fr_1fr] gap-1 '>
                <MiddleComponent />
                <EmployeeDetails />
            </div>
        </div>
    )
}

export default Dashbord