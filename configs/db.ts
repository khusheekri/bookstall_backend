import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  console.log("Loaded MONGO_URI:", process.env.MONGO_URI); // <-- Add this line

  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error("MongoDB URI not found in .env");

  await mongoose.connect(uri);
  console.log("MongoDB connected");
};

export default connectDB;
