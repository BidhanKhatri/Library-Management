// const mongoose = require("mongoose");
import mongoose from "mongoose"; //this is of ES6

const studentSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  access_token: { type: String, default: "" },
  refresh_token: { type: String, default: "" },
  role: { type: String, enum: ["Admin", "Student"], default: "Student" },
});

const StudentModel = mongoose.model("student", studentSchema);
export default StudentModel;
