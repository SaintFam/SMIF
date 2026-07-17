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


    },
    nationalId: {
        type: Number,

    },
    phoneNumber: {
        type: Number,

    },
    dateOfEmployment: {
        type: Date,
        default: Date.now
    },
    jobTitle: {
        type: String,

    },
    unit: {
        type: String,

    },
    employmentStatus: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Active'
    },
    computerAssigned: {
        type: Boolean,
        default: false
    },
    educationLevel: {
        type: String,

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