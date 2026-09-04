import React from 'react'
import MiddleComponent from './MiddleComponent'
import EmployeeDetails from './EmployeeDetails'

const ModernMiddleComp = () => {
    return (
        <div className='flex flex-row'>
            <MiddleComponent />
            <EmployeeDetails />
        </div>
    )
}

export default ModernMiddleComp