import mongoose from "mongoose";
import { env } from "./env.js";

// أي حقل مش معرّف بالـ Schema بينشال من الاستعلامات
mongoose.set("strictQuery", true);

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(env.mongoUri, {
      serverSelectionTimeoutMS: 10000,
    });
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};