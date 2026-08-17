import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { backend_url } from "../App";
import { toast } from "sonner";

export const AdminContext = createContext();
const AdminContextProvider = (props) => {
    const navigate = useNavigate();
    const [EmployeeData, setEmployeeData] = useState([])

    {/** FUNCTION FOR FETCHING ALL EMPLOYEES IN DATABASE*/ }
    const fetchEmployee = async () => {
        try {
            const response = await axios.get(`${backend_url}/api/employers/all`)
            if (response.data.success) {
                setEmployeeData(response.data.employers)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.error("Error fetching Employee", error)
            toast.error("An Error Accured While Fetching Employees")
        }
    }

    useEffect(() => {
        fetchEmployee()

    }, [])

    useEffect(() => {
        console.log(EmployeeData)
    }, [EmployeeData])

    const value = {
        navigate,

    };
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    );
}

export default AdminContextProvider;