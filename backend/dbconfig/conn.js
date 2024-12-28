import mongoose from "mongoose";

// db connection using promise
// mongoose
//   .connect("mongodb://localhost:27017/library-class")
//   .then(() => console.log("Database connected!"))
//   .catch((error) => console.log(error));

//using function or async await

const connectDB = async () => {
  try {
    const url =
      process.env.MONGO_URI || "mongodb://localhost:27017/library-class";
    await mongoose.connect(url);
    console.log("Database connected!");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); 
  }
};

export default connectDB;
