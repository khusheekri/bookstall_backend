import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    bookId: {
        type: String,
        required: true,
        unique: true
      },
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
      }  ,
    rating: {
        type: Number,
        required: false,
        min: 0,
        max: 5,
        default: 0
    },
    publishedDate: {
        type: Date,
        required: true
    }
});

export default model('Book', bookSchema);
