import React, { useEffect, useRef, useState } from "react";
import {
    Search,
    ChevronDown,
    ChevronUp,
    CalendarDays,
    X,
} from "lucide-react";

const RegisterComputer = () => {

    const employees = [
        {
            id: 1,
            name: "John Doe",
            position: "Software Engineer",
            image:
                "https://i.pravatar.cc/100?img=12",
        },
        {
            id: 2,
            name: "Iradukunda",
            position: "UI/UX Designer",
            image:
                "https://i.pravatar.cc/100?img=47",
        },
        {
            id: 3,
            name: "Musang",
            position: "IT Support",
            image:
                "https://i.pravatar.cc/100?img=33",
        },
        {
            id: 4,
            name: "Sarah Wilson",
            position: "Project Manager",
            image:
                "https://i.pravatar.cc/100?img=44",
        },
        {
            id: 5,
            name: "Kevin Smith",
            position: "System Administrator",
            image:
                "https://i.pravatar.cc/100?img=11",
        },
    ];


    const [formData, setFormData] = useState({
        deviceName: "",
        serialNumber: "",
        operatingSystem: "Windows 11 Pro",
        processor: "",
        ram: "",
        storage: "",
        deviceType: "Laptop",
        employee: null,
        assignedBy: "Admin User",
        assignmentStatus: "Assigned",
        assignmentDate: "",
        notes: "",
    });



    // Employee search state
    const [search, setSearch] = useState("");
    const [employeeOpen, setEmployeeOpen] = useState(false);

    // Handle normal inputs
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };



    // Remove selected employee

    const removeEmployee = () => {
        setFormData((prev) => ({
            ...prev,
            employee: null,
        }));

        setSearch("");
    };

    const employeeRef = useRef(null);

    return (
        <div className="min-h-screen bg-[#fafafa] px-4 py-8 md:px-8">
            <div className="mx-auto max-w-[1200px]">

                <h1 className="mb-6 text-2xl font-bold tracking-tight text-[#c99516] md:text-3xl">
                    Add/Edit Computer Assignment
                </h1>

                <form

                    className="overflow-visible rounded-xl border border-gray-100 bg-white shadow-[0_3px_20px_rgba(0,0,0,0.06)]"
                >
                    <section className="p-5 md:p-6">
                        <h2 className="mb-5 text-lg font-semibold text-[#b9901a]">
                            Computer Details
                        </h2>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-800">
                                    Device Name
                                </label>

                                <input
                                    type="text"
                                    name="deviceName"
                                    value={formData.deviceName}
                                    onChange={handleChange}
                                    placeholder="e.g., Lenovo ThinkPad T14"
                                    className="h-10 w-full rounded-lg border border-[#dfcc86] bg-white px-3 text-sm outline-none transition focus:border-[#c99b16] focus:ring-2 focus:ring-[#c99b16]/10"
                                />
                            </div>

                            {/* Serial Number */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-800">
                                    Serial Number
                                </label>

                                <input
                                    type="text"
                                    name="serialNumber"
                                    value={formData.serialNumber}
                                    onChange={handleChange}
                                    className="h-10 w-full rounded-lg border border-[#dfcc86] px-3 text-sm outline-none focus:border-[#c99b16] focus:ring-2 focus:ring-[#c99b16]/10"
                                />
                            </div>

                            {/* Operating System */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-800">
                                    Operating System
                                </label>

                                <div className="relative">
                                    <select
                                        name="operatingSystem"
                                        value={formData.operatingSystem}
                                        onChange={handleChange}
                                        className="h-10 w-full appearance-none rounded-lg border border-[#dfcc86] bg-white px-3 pr-10 text-sm outline-none focus:border-[#c99b16] focus:ring-2 focus:ring-[#c99b16]/10"
                                    >
                                        <option>Windows 11 Pro</option>
                                        <option>Windows 11</option>
                                        <option>Windows 10</option>
                                        <option>Ubuntu 24.04</option>
                                        <option>Ubuntu 22.04</option>
                                        <option>macOS Sonoma</option>
                                        <option>macOS Sequoia</option>
                                        <option>Other</option>
                                    </select>

                                    <ChevronDown
                                        size={17}
                                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                                    />
                                </div>
                            </div>


                            {/* Processor */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-800">
                                    Processor
                                </label>

                                <input
                                    type="text"
                                    name="processor"
                                    value={formData.processor}
                                    onChange={handleChange}
                                    className="h-10 w-full rounded-lg border border-[#dfcc86] px-3 text-sm outline-none focus:border-[#c99b16] focus:ring-2 focus:ring-[#c99b16]/10"
                                />
                            </div>

                            {/* RAM */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-800">
                                    RAM
                                </label>

                                <div className="flex items-center gap-2">
                                    <input
                                        type="number"
                                        name="ram"
                                        value={formData.ram}
                                        onChange={handleChange}
                                        placeholder="16"
                                        className="h-10 w-[90px] rounded-lg border border-[#dfcc86] px-3 text-sm outline-none focus:border-[#c99b16] focus:ring-2 focus:ring-[#c99b16]/10"
                                    />

                                    <span className="text-sm text-gray-700">
                                        GB DDR4
                                    </span>
                                </div>
                            </div>

                            {/* Storage */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-800">
                                    Storage
                                </label>

                                <div className="flex items-center gap-2">
                                    <input
                                        type="number"
                                        name="storage"
                                        value={formData.storage}
                                        onChange={handleChange}
                                        placeholder="512"
                                        className="h-10 w-[90px] rounded-lg border border-[#dfcc86] px-3 text-sm outline-none focus:border-[#c99b16] focus:ring-2 focus:ring-[#c99b16]/10"
                                    />

                                    <span className="text-sm text-gray-700">
                                        GB SSD
                                    </span>
                                </div>
                            </div>

                            {/* Device Type */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-800">
                                    Device Type
                                </label>

                                <div className="relative">
                                    <select
                                        name="deviceType"
                                        value={formData.deviceType}
                                        onChange={handleChange}
                                        className="h-10 w-full appearance-none rounded-lg border border-[#dfcc86] bg-white px-3 pr-10 text-sm outline-none focus:border-[#c99b16] focus:ring-2 focus:ring-[#c99b16]/10"
                                    >
                                        <option>Laptop</option>
                                        <option>Desktop</option>
                                        <option>Tablet</option>
                                        <option>MacBook</option>
                                        <option>Other</option>
                                    </select>

                                    <ChevronDown
                                        size={17}
                                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>


                    {/*  OWNER INFORMATION */}
                    <section className="border-t border-gray-100 p-5 md:p-6">
                        <h2 className="mb-5 text-lg font-semibold text-[#b9901a]">
                            Owner Information
                        </h2>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            {/* EMPLOYEE SEARCH */}
                            <div
                                ref={employeeRef}
                                className="relative"
                            >
                                <label className="mb-2 block text-sm font-medium text-gray-800">
                                    Assign to Employee
                                </label>
                                <div className="relative">
                                    <Search
                                        size={17}
                                        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 text-gray-400"
                                    />
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={(e) => {
                                            setSearch(e.target.value);
                                            setEmployeeOpen(true);
                                        }}
                                        onFocus={() => setEmployeeOpen(true)}
                                        placeholder="Search"
                                        className="h-10 w-full rounded-lg border border-[#dfcc86] bg-white pl-9 pr-10 text-sm outline-none focus:border-[#c99b16] focus:ring-2 focus:ring-[#c99b16]/10"
                                    />
                                    {formData.employee ? (
                                        <button
                                            type="button"
                                            onClick={removeEmployee}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
                                        >
                                            <X size={17} />
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setEmployeeOpen((prev) => !prev)
                                            }
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                        >
                                            {employeeOpen ? (
                                                <ChevronUp size={17} />
                                            ) : (
                                                <ChevronDown size={17} />
                                            )}
                                        </button>
                                    )}
                                </div>

                                {/* SEARCH RESULTS  */}
                                <div className="absolute left-0 right-0 z-50 mt-1 max-h-60 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-xl">

                                </div>
                            </div>
                        </div>
                    </section>
                </form>
            </div> </div>
    )
}

export default RegisterComputer