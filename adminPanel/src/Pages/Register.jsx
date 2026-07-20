import React, { useState } from 'react'
import RegisterTitle from '../Components/RegisterTitle'
import PersonalInfo from '../Components/PersonalInfo'
import JobInfo from '../Components/JobInfo'
import EducationInfo from '../Components/EducationInfo'
import LocationInfo from '../Components/LocationInfo'
import NextofKin from '../Components/NextofKin'
import FormSub from '../Components/FormSub'
import axios from "axios"
import { backend_url } from "../App"

const Register = () => {

    const [employee, setEmployee] = useState({
        firstName: "Musana",
        lastName: "",
        email: "",
        gender: "",
        nationalId: "",
        phoneNumber: "",
        dateOfEmployment: "",
        jobTitle: "",
        unit: "",
        employmentStatus: "",
        computerAssigned: "",
        educationLevel: "",
        specialization: "",
        district: "",
        sector: "",
        cell: "",
        village: "",
        nextOfKin: "",
        nextOfKinPhone: "",
        relationshipWithNextOfKin: "",
        image: null


    })

    const SaveToDatabase = async (e) => {
        e.preventDefault()
        console.log("Here It Is")
        try {

            const formData = new FormData();
            formData.append("firstName", employee.firstName);
            formData.append("lastName", employee.lastName);
            formData.append("email", employee.email);
            formData.append("gender", employee.gender);
            formData.append("nationalId", employee.nationalId);
            formData.append("phoneNumber", employee.phoneNumber);
            formData.append("dateOfEmployment", employee.dateOfEmployment);
            formData.append("jobTitle", employee.jobTitle);
            formData.append("unit", employee.unit);
            formData.append("employmentStatus", employee.employmentStatus);
            formData.append("computerAssigned", employee.computerAssigned);
            formData.append("educationLevel", employee.educationLevel);
            formData.append("specialization", employee.specialization);
            formData.append("district", employee.district);
            formData.append("sector", employee.sector);
            formData.append("cell", employee.cell);
            formData.append("village", employee.village);
            formData.append("nextOfKin", employee.nextOfKin);
            formData.append("nextOfKinPhone", employee.nextOfKinPhone);
            formData.append("relationshipWithNextOfKin", employee.relationshipWithNextOfKin);

            if (employee.image) {
                formData.append("image", employee.image)
            }

            const response = await axios.post(
                backend_url + "/api/employers/register/", formData
            )

            if (response.data.success) {
                console.log("Data Saved SuccessFull")
            }




        } catch (error) {
            console.log(error)
            console.log(error.response.data.message)
        }
    }



    return (
        <div className='mx-5 my-5 p-5 '>
            <RegisterTitle />
            <PersonalInfo employee={employee} setEmployee={setEmployee} />
            <JobInfo employee={employee} setEmployee={setEmployee} />
            <EducationInfo employee={employee} setEmployee={setEmployee} />
            <LocationInfo employee={employee} setEmployee={setEmployee} />
            <NextofKin employee={employee} setEmployee={setEmployee} />
            <FormSub SaveToDatabase={SaveToDatabase} employee={employee} setEmployee={setEmployee} />
        </div>
    )
}

export default Register