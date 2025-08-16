import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import jwt from "jsonwebtoken";
import validator from "validator";
import userModel from "../models/userModel.js";

const registerUser = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        if (!fullName || !email || !password) {
            return res.json({ success: false, message: "Missing Details" });
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Enter a valid email" });
        }
        if (password.length < 8) {
            return res.json({
                success: false,
                message: "Enter a strong password",
            });
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const userData = {
            fullName,
            email,
            password: hashedPassword,
        };

        const newUser = new userModel(userData);

        const user = await newUser.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

//log in user API
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            res.json({ success: true, token });
        } else {
            res.json({ success: false, message: "Invalid credentials" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const getProfile = async (req, res) => {
    try {
        const userId = req.userId;
        // const { userId } = req.body;
        const userData = await userModel.findById(userId).select("-password");
        res.json({ success: true, userData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const updateProfile = async (req, res) => {
    try {
        const { userId, fullName, phone, location, dob, gender } = req.body;
        const imageFile = req.file;

        if (!fullName || !phone || !dob || !gender) {
            return res.jason({ success: false, message: "Data Missing" });
        }
        await userModel.findByIdAndUpdate(userId, {
            fullName,
            phone,
            location: JSON.parse(location),
            dob,
            gender,
        });

        if (imageFile) {
            const imageUpload = await cloudinary.uploader.upload(
                imageFile.path,
                { resource_type: "image" }
            );
            const imageURL = imageUpload.secure_url;

            await userModel.findByIdAndUpdate(userId, { image: imageURL });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { getProfile, loginUser, registerUser, updateProfile };
