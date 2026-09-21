import mongoose from "mongoose";

const computerAssignmentSchema = new mongoose.Schema(
    {
        deviceName: {
            type: String,
            required: true,
            trim: true,
        },

        serialNumber: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        operatingSystem: {
            type: String,
            default: "Windows 11 Pro",
            trim: true,
        },

        processor: {
            type: String,
            required: true,
            trim: true,
        },

        ram: {
            type: String,
            required: true,
            trim: true,
        },

        storage: {
            type: String,
            required: true,
            trim: true,
        },

        deviceType: {
            type: String,
            enum: ["Laptop", "Desktop", "Tablet"],
            default: "Laptop",
        },

        employee: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Employer",
            required: true,
        },



        assignmentStatus: {
            type: String,
            enum: ["Assigned", "Returned", "Pending"],
            default: "Assigned",
        },

        assignmentDate: {
            type: Date,
            default: Date.now,
        },


    },

);

const ComputerAssignment = mongoose.model(
    "ComputerAssignment",
    computerAssignmentSchema
);

export default ComputerAssignment;