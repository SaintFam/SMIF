import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],


    },
    nationalId: {
        type: Number,

    },
    phoneNumber: {
        type: Number,

    },
    dateOfEmployment: {
        type: String,

    },
    jobTitle: {
        type: String,
        enum: ["Coordinator", "Health And Social Rehabilitation", " Director of Vocational Training", "Clinical Psychology", "Trainer", "Assistant Trainer", "Mental Nurse Officer", "Community Environmental Health Officer", "Database and ICT", "Chief Cook", "Cook", "Nurse", "Laboratory Technician", "Electrician", "Logistic Officer", "Production Officer", "Navigator", "Patient Attendant"]

    },
    unit: {
        type: String,
        enum: ['Administration', 'Vocational Training', 'Health And Social Rehabilitation'],

    },
    employmentStatus: {
        type: String,
        enum: ['Active', 'Not Active'],
        default: 'Active'
    },
    computerAssigned: {
        type: String,
        enum: ["Yes", "No"]
    },
    educationLevel: {
        type: String,
        enum: ['A2', 'A1', 'A0', 'Masters', 'PHD']

    },
    specialization: {
        type: String,

    },
    district: {
        type: String,

    },
    sector: {
        type: String,

    },
    cell: {
        type: String,

    },
    village: {
        type: String,

    },
    nextOfKin: {
        type: String,

    },
    nextOfKinPhone: {
        type: Number,

    },
    relationshipWithNextOfKin: {
        type: String,

    },
    image: {
        type: String,

    },
})

export default mongoose.model('Employer', employeeSchema);