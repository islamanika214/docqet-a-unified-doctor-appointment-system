import express from "express";

import cors from "cors";
import "dotenv/config";
import connectCloudinary from "./config/cloudinary.js";
import connectDB from "./config/mongodb.js";
import adminRouter from "./routes/adminoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";

// App configuration

const doctorApp = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();
// Middlewares

doctorApp.use(express.json());
doctorApp.use(cors());

// API endpoints

// doctorApp.use("/api/admin", adminRouter);

//added for testing
doctorApp.use("/api/admin", adminRouter);
doctorApp.use((err, req, res, next) => {
    console.error("Route error:", err);
    res.status(500).send("Something broke!");
}); //added

doctorApp.use("/api/doctor", doctorRouter);

doctorApp.use("/api/user", userRouter);

doctorApp.get("/", (req, res) => {
    res.send("API WORKING");
});

doctorApp.listen(port, () => console.log("Server Started", port));
