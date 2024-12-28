// const mongoose = require("mongoose");
import mongoose from "mongoose"; //this is of ES6

const studentSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const StudentModel = mongoose.model("student", studentSchema);
export default StudentModel;
