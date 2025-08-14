import mongoose from "mongoose";
const connectDB = async () => {
    //// adeed for testing
    const connectDB = async () => {
        try {
            console.log("Attempting to connect to MongoDB...");
            await mongoose.connect(`${process.env.MONGODB_URI}/docqet`);
            console.log("MongoDB connected successfully!");
        } catch (error) {
            console.error("MongoDB connection FAILED:", error);
            process.exit(1);
        }
    }; // adeed for testing
    mongoose.connection.on("connected", () =>
        console.log("Database Connected")
    );
    await mongoose.connect(`${process.env.MONGODB_URI}/docqet`);
};

export default connectDB;
