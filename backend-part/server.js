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

// addeded for testing

// Add this after your other middlewares but before routes
doctorApp.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    next();
});

// API endpoints

// doctorApp.use("/api/admin", adminRouter);

//added for testing
doctorApp.use("/api/admin", adminRouter);
doctorApp.use((err, req, res, next) => {
    console.error("Route error:", err);
    res.status(500).send("Something broke!");
}); //added
doctorApp.get("/", (req, res) => {
    res.send("API WORKING");
});

doctorApp.listen(port, () => console.log("Server Started", port));
