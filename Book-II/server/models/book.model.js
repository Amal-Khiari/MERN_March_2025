import {model, Schema} from 'mongoose';
const BookSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "title is required!"],
            minlength: [2, "title  must be at least 2 characters long!"],
            maxlength: [255, "title  must be less than 255 characters long"]
        },
        author: {
            type: String,
            required: [true, "author is required!"],
            minlength: [5, "author must be at least 5 characters long!"],
            maxlength: [255, "author must be less than 255 characters long"]
        },
        page : {
            type: Number,
            required: [true, "page is required!"],
            min: [1, "page must be at least 1 min !"]
        },
       isAvailable : {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);
const Book = model("Book", BookSchema);
export default Book;