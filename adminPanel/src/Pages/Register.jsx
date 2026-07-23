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
import { toast } from 'sonner'

const Register = () => {

    const [employee, setEmployee] = useState({
        firstName: "Musana",
        lastName: "",
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
        const loadingToast = toast.loading("Saving Employee...")
        try {

            const formData = new FormData();
            formData.append("firstName", employee.firstName);
            formData.append("lastName", employee.lastName);
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
                toast.success("Employee Registered SuccessFull",
                    { id: loadingToast }, {
                    style: {
                        color: "#D89D1E",
                        background: "#f7efef",
                        border: "1px solid #A87400",
                    },
                },)

                console.log("Data Saved SuccessFull")
            } else {
                toast.error("Failed To Save Employee",
                    { id: loadingToast }, {
                    style: {
                        color: "#d81e1e",
                        background: "#f7efef",
                        border: "1px solid #A87400",
                    },
                },)
            }




        } catch (error) {
            console.log(error)
            toast.error(error.response?.data?.message || "Something Went Wrong", {
                style: {
                    color: "#d81e1e",
                    background: "#f7efef",
                    border: "1px solid #A87400",
                },
            }, { id: loadingToast })

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