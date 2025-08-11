import express from "express";

import cors from "cors";

import "dotenv/config";

// App configuration

const doctorApp = express();
const port = process.env.PORT || 4000;

// Middlewares

doctorApp.use(express.json());
doctorApp.use(cors());

// API endpoints

doctorApp.get("/", (req, res) => {
    res.send("API WORKING");
});

doctorApp.listen(port, () => console.log("Server Started", port));
