import mongoose from "mongoose";
import dotenv from "dotenv";

// Load .env file
dotenv.config();

const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  // Debug logs
  console.log("✅ Loaded MONGO_URI:", uri);

  if (!uri || uri.trim() === "") {
    console.error("❌ MONGO_URI is missing or empty in .env file");
    throw new Error("MongoDB URI not found in .env");
  }

  try {
    await mongoose.connect(uri);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
};

export default connectDB;
