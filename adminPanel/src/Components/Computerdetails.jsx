import React from "react";
import { useOutletContext } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaComputer, FaLocationDot } from "react-icons/fa6";
import { LuPencilLine } from "react-icons/lu";

// `employee` is passed in from the parent (ComputerAssigned) so this panel
// always reflects whichever row was clicked in the table.
const Computerdetails = ({ employee, onClose }) => {
    // Safety net: if no employee has been resolved yet (e.g. data still
    // loading, or the id didn't match anything), render nothing instead of
    // crashing on employee.photo below.
    if (!employee) return null;

    const {
        isExpanded,
        setIsExpanded
    } = useOutletContext()


    return (
        <div className="relative bg-white w-full h-full overflow-y-auto shadow-2xl rounded-xl border border-gray-200">
            {/*closing button*/}
            <button
                onClick={() => {
                    onClose();
                    setIsExpanded(true);
                }}
                className="absolute text-gray-600 top-1 right-3"
            >
                x
            </button>

            {/*Employee Details*/}
            <div className="flex p-3 mt-4 gap-2 items-center">
                <FaUser className="text-yellow-500 text-xs lg:text-[20px]" />
                <h2 className="text-yellow-500 font-bold text-xs md:text-[12px] xl:text-lg">
                    Employee Details
                </h2>
            </div>

            <div className="flex flex-row gap-2 md:gap-6 lg:m-5 shadow-xl p-4">
                <div className="flex flex-col gap-4 rounded-full">
                    <img
                        src={employee.employeeImage}
                        alt=""
                        className="rounded-full w-20 h-20 object-cover"
                    />
                </div>
                <div>
                    <h3 className="text-xs mt-1 md:text-lg lg:text-xl">
                        {employee.name}
                    </h3>
                    <p className="text-sm md:text-md mt-1 text-yellow-500">
                        {employee.role}
                    </p>
                    <div className="bg-yellow-100">
                        <p className="text-sm md:text-md mt-1 text-yellow-700">
                            {employee.unit}
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <Title icon={<FaComputer size={14} />} title="Computer Information">
                    <Personinfo label="Computer Name: " value={employee.computer} />
                    <Personinfo label="Processor: " value={employee.processor} />
                    <Personinfo label="Ram: " value={employee.ram} />
                    <Personinfo label="Storage: " value={employee.storage} />
                    <Personinfo label="Serial Number: " value={employee.serial} />
                </Title>
                <Title icon={<FaLocationDot size={14} />} title="Assignement Date">
                    <Personinfo label="Date Assigned: " value={employee.date} />
                    <Personinfo label="Assigned Status: " value={employee.status} />
                </Title>
                <div className="flex w-full items-center justify-center">
                    <button className="mt-6 w-4/5 mb-8 py-1 rounded-md flex items-center justify-center gap-2 bg-yellow-500 text-white">
                        <LuPencilLine className="text-white" /> Update Assignment
                    </button>
                </div>
            </div>
        </div>
    );
};

function Personinfo({ label, value }) {
    return (
        <div className="grid grid-cols-2 text-sm pl-3 pt-1">
            <span className="text-gray-500">{label}</span>
            <span className="text-gray-500">{value}</span>
        </div>
    );
}

export function Title({ icon, title, children }) {
    return (
        <div className="mt-6">
            <div className="text-yellow-500 text-xs flex items-center gap-2 pl-3">
                {icon}
                <span className="text-lg">{title}</span>
            </div>
            {children}
        </div>
    );
}

export default Computerdetails;