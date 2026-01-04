import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  // Check if already connected
  if (connected) {
    console.log("Already connected to MongoDB");
    return;
  }
  // Establish a new connection
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;
