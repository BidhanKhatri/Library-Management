import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    bookname: { type: String, required: true, unique: true, trim: true },
    author: { type: String, required: true, minlength: 2, trim: true },
    genere: {
      type: [String],
      required: true,
      enum: ["Si-fi", "Adventure", "Drama", "Comic"],
      trim: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 200,
      trim: true,
    },
    publishdate: { type: Date, required: false },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const BookModel = mongoose.model("book", bookSchema);
export default BookModel;
