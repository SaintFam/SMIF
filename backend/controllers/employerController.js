import Employer from "../models/userModel.js";
import cloudinary from "../config/cloudinary.js";

export const registerEmployer = async (req, res) => {
    try {

        const {
            firstName,
            lastName,
            email,
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


        // Create a new employer document
        const employer = await Employer.create({
            firstName,
            lastName,
            email,
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

        res.status(201)
            .json({ message: "Employer registered successfully", employer });

    } catch (error) {
        console.error("Error registering employer:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getAllEmployers = async (req, res) => {
    try {
        const employers = await Employer.find();
        res.status(200).json({ employers });
    } catch (error) {
        console.error("Error fetching employers:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

