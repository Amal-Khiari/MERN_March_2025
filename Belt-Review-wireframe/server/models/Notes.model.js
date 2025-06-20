import {model, Schema} from 'mongoose';
const NotesSchema = new Schema(
    {
        Title: {
            type: String,
            required: [true, "Title name is required!"],
            minlength: [2, "Title name must be at least 2 characters long!"],
            maxlength: [255, "Title name must be less than 255 characters long"]
        },
        Content: {
            type: String,
            required: [true, "Content is required!"],
            minlength: [2, "Content must be at least 2 characters long!"],
            maxlength: [1000, "Content must be less than 1000characters long"]
        },
        Important : {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);
const Notes= model("Notes", NotesSchema);
export default Notes;