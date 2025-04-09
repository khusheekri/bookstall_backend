import mongoose from "mongoose";
import { config } from "dotenv";

config();

const dbUrl = process.env.DB_URL as string;

export const connectDB = async () => {
    mongoose.set('strictQuery', true)       
    await mongoose.connect(dbUrl)
}


