import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
    {/** Handling  Change For InputFileds*/ }
    const handleEveryChange = (e) => {
        setEmployee({
            ...employee, [e.target.name]: e.target.value
        })
    }

    const navigate = useNavigate();

    const value = {
        navigate,
        handleEveryChange
    };
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    );
}

export default AdminContextProvider;