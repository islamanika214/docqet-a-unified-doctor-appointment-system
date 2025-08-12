import express from "express";

import cors from "cors";
import "dotenv/config";
import connectCloudinary from "./config/cloudinary.js";
import connectDB from "./config/mongodb.js";
import adminRouter from "./routes/adminoute.js";

// App configuration

const doctorApp = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();
// Middlewares

doctorApp.use(express.json());
doctorApp.use(cors());

// API endpoints

doctorApp.use("/api/admin", adminRouter);
doctorApp.get("/", (req, res) => {
    res.send("API WORKING");
});

doctorApp.listen(port, () => console.log("Server Started", port));
