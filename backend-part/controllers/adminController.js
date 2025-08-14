import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import jwt from "jsonwebtoken";
import validator from "validator";
import {
    default as doctorModel,
    default as doctortModel,
} from "../models/doctorModel.js";

// API for adding doctor

const addDoctor = async (req, res) => {
    try {
        const {
            fullName,
            email,
            password,
            speciality,
            qualification,
            yearsOfService,
            bio,
            consultationFee,
            location,
        } = req.body;
        const imageFile = req.file;

        // checking for all data to add doctor
        if (
            !fullName ||
            !email ||
            !password ||
            !speciality ||
            !qualification ||
            !yearsOfService ||
            !bio ||
            !consultationFee ||
            !location
        ) {
            return res.json({ success: false, message: "Missing Details" });
        }

        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: "Please enter a valid email",
            });
        }

        //validating strong password
        if (password.length < 8) {
            return res.json({
                success: false,
                message: "Please enter a strong password",
            });
        }
        //hashing doctor password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //upload image to cloudinary
        // const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        //     resource_type: "image",
        // });
        // const imageUrl = imageUpload.secure_url;

        let imageUrl;
        try {
            const imageUpload = await cloudinary.uploader.upload(
                imageFile.path,
                {
                    resource_type: "image",
                    folder: "doctor_images", // Add folder for better organization
                }
            );
            imageUrl = imageUpload.secure_url;
        } catch (uploadError) {
            console.error("Cloudinary upload failed:", uploadError);
            return res.json({
                success: false,
                message: "Failed to upload doctor image",
            });
        }
        // const imageUrl = "default.jpg";
        const doctorData = {
            fullName,
            email,
            photo: imageUrl,
            password: hashedPassword,
            speciality,
            qualification,
            yearsOfService,
            bio,
            consultationFee,
            location: JSON.parse(location),
            date: Date.now(),
        };

        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();
        res.json({ success: true, message: "Doctor Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (
            email === process.env.ADMIN_EMAIL &&
            password === process.env.ADMIN_PASSWORD
        ) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET);
            res.json({ success: true, token });
        } else {
            res.json({ success: false, message: "Invalid credentials" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const allDoctors = async (req, res) => {
    try {
        const doctors = await doctortModel.find({}).select("-password");
        res.json({ success: true, doctors });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { addDoctor, allDoctors, loginAdmin };
