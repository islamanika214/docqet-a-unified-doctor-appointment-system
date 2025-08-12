import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        photo: { type: String, required: true },
        speciality: { type: String, required: true },
        qualification: { type: String, required: true },
        yearsOfService: { type: String, required: true },
        bio: { type: String, required: true },
        available: { type: Boolean, default: true },
        consultationFee: { type: Number, required: true },
        location: { type: Object, required: true },
        date: { type: Number, required: true },
        slots_booked: { type: Object, default: {} },
    },
    { minimize: false }
);

const doctortModel =
    mongoose.models.doctor || mongoose.model("doctor", doctorSchema);

export default doctortModel;
