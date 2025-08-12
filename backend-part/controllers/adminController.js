import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import validator from "validator";
import doctorModel from "../models/doctorModel.js";

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

        // //upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
            resourece_type: "image",
        });
        const imageUrl = imageUpload.secure_url;
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
        res.json({ sucess: true, message: "Doctor Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const loginAdmin = async (req, res) => {
    try {
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { addDoctor, loginAdmin };
