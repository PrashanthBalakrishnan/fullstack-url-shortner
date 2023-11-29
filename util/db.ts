import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected!!");
    return;
  }

  try {
    await mongoose.connect(
      "mongodb+srv://prashanth:eT75HjUmUBr5itDS@cluster0.q46a5u3.mongodb.net/test",
    );
    isConnected = true;
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
};
