import Employer from "../models/userModel.js";
import cloudinary from "../config/cloudinary.js";
import userModel from "../models/userModel.js";


export const LoginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body
        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            })
        }

        // Find employer by email
        const employee = await userModel.findOne({ email })
        if (!employee) {
            return res.status(401).json({
                message: "Email Not Found"
            })
        }
        //Compare Password 
        if (employee.password !== password) {
            return res.status(401).json({
                message: "Password Is Incorrect"
            })
        }
        //Login Successfull
        res.status(200).json({
            message: "Login SuccessFully",
            success: true
        })

    } catch (error) {
        console.log("Login failed", error)
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export const registerEmployer = async (req, res) => {
    try {

        const {
            firstName,
            lastName,
            gender,
            nationalId,
            phoneNumber,
            dateOfEmployment,
            jobTitle,
            unit,
            employmentStatus,
            computerAssigned,
            educationLevel,
            specialization,
            district,
            sector,
            cell,
            village,
            nextOfKin,
            nextOfKinPhone,
            relationshipWithNextOfKin,
        } = req.body
        // Validate required fields
        if (!req.file) {
            return res.status(400)
                .json({ message: "Image file is required" });
        }
        // Convert the image file to base64
        const base64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString(
            "base64"
        )}`;

        //Uplaod the image to Cloudinary
        const result = await cloudinary.uploader.upload(base64, {
            folder: "employer_images",
        });

        //Generate Email By First and LastName + @Irc.rw
        let GeneratedEmail = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@irc.rw`
        let email = GeneratedEmail
        //Checking Uniqueness , add Random Number If It Needed  
        let existEmail = await userModel.findOne({ email })
        while (existEmail) {
            const randomNumber = Math.floor(Math.random() * 1000) //Any Nubmber *2 
            email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${randomNumber}@irc.rw`
            existEmail = await userModel.findOne({ email })
        }
        //Generating password 
        let Uniformpass = "Irc"
        let password = `${Uniformpass.toLocaleLowerCase()}`
        //Checking if It Already In database
        let existingGeneratedPassword = await userModel.findOne({ password })
        while (existingGeneratedPassword) {
            const randomNumber = Math.floor(Math.random() * 1000)
            password = `${Uniformpass.toLocaleLowerCase()}${randomNumber}`
            existingGeneratedPassword = await userModel.findOne({ password })
        }
        console.log("Password:", password)
        // Create a new employer document
        const employer = await Employer.create({
            firstName,
            lastName,
            email,
            password,
            gender,
            nationalId,
            phoneNumber,
            dateOfEmployment,
            jobTitle,
            unit,
            employmentStatus,
            computerAssigned,
            educationLevel,
            specialization,
            district,
            sector,
            cell,
            village,
            nextOfKin,
            nextOfKinPhone,
            relationshipWithNextOfKin,
            image: result.secure_url
        });
        console.log(employer)

        res.status(201)
            .json({ message: "Employer registered successfully", success: true, employer });

    } catch (error) {
        console.error("Error registering employer:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getAllEmployers = async (req, res) => {
    try {
        const employers = await Employer.find();
        res.status(200).json({ employers, success: true },);
    } catch (error) {
        console.error("Error fetching employers:", error);
        res.status(500).json({ message: "Internal server error", success: false });
    }
}

