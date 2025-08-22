import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointmentModel.js";
import doctorModel from "../models/doctorModel.js";

const changeAvailability = async (req, res) => {
    try {
        const { docId } = req.body;
        const docData = await doctorModel.findById(docId);
        await doctorModel.findByIdAndUpdate(docId, {
            available: !docData.available,
        });

        res.json({ success: true, message: "Availability Changed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const doctorList = async (req, res) => {
    try {
        const doctors = await doctorModel
            .find({})
            .select(["-password", "-email"]);
        res.json({ success: true, doctors });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const loginDoctor = async (req, res) => {
    try {
        const { email, password } = req.body;
        const doctor = await doctorModel.findOne({ email });

        if (!doctor) {
            return res.json({ success: false, message: "Invalid Credentials" });
        }
        const isMatch = await bcrypt.compare(password, doctor.password);

        if (isMatch) {
            const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET);
            res.json({ success: true, token });
        } else {
            res.json({ success: false, message: "Invalid Credentials" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const appointmentsDoctor = async (req, res) => {
    try {
        // const { docId } = req.body;
        // const docId = req.body.docId;
        const docId = req.docId;
        const appointments = await appointmentModel.find({ docId });

        res.json({ success: true, appointments });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const appointmentComplete = async (req, res) => {
    try {
        const { appointmentId } = req.body;
        const docId = req.docId;
        const appointmentData = await appointmentModel.findById(appointmentId);

        if (
            appointmentData &&
            appointmentData.docId.toString() === docId.toString()
        ) {
            await appointmentModel.findByIdAndUpdate(appointmentId, {
                isCompleted: true,
            });
            return res.json({
                success: true,
                message: "appointment Completed",
            });
        } else {
            return res.json({ success: false, message: "Mark Failed" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const appointmentCancel = async (req, res) => {
    try {
        const { appointmentId } = req.body;
        const docId = req.docId;

        const appointmentData = await appointmentModel.findById(appointmentId);

        if (
            appointmentData &&
            appointmentData.docId.toString() === docId.toString()
        ) {
            await appointmentModel.findByIdAndUpdate(appointmentId, {
                cancelled: true,
            });
            return res.json({
                success: true,
                message: "Appointment Cancelled",
            });
        } else {
            return res.json({
                success: false,
                message:
                    "Cancellation Failed - Unauthorized or appointment not found",
            });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const doctorProfile = async (req, res) => {
    try {
        const docId = req.docId; // from auth middleware
        const doctor = await doctorModel.findById(docId).select("-password");

        if (!doctor) {
            return res.json({ success: false, message: "Doctor not found" });
        }

        res.json({ success: true, doctor });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const updateDoctorProfile = async (req, res) => {
    try {
        const docId = req.docId; // from auth middleware
        const updateData = req.body;

        // Remove password from update data for security
        delete updateData.password;
        delete updateData._id;

        const updatedDoctor = await doctorModel
            .findByIdAndUpdate(docId, updateData, { new: true })
            .select("-password");

        if (!updatedDoctor) {
            return res.json({ success: false, message: "Doctor not found" });
        }

        res.json({
            success: true,
            message: "Profile updated successfully",
            doctor: updatedDoctor,
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export {
    appointmentCancel,
    appointmentComplete,
    appointmentsDoctor,
    changeAvailability,
    doctorList,
    doctorProfile,
    loginDoctor,
    updateDoctorProfile,
};
