import { model, Model,Schema } from "mongoose";

const bookSchema = new Schema ({

    title : {
        type: String,
        //* validations
        required:[true, "{PATH} is required"],
        minlenght:[2, "{PATH} must be at least 2 caracters "],
        maxlenght:[255,"{PATH} must be maximum 255 caracters"],

    },

    author:{
        type: String,
        //* validations
        required:[true, "{PATH} is required"],
        minlenght:[5, "{PATH} must be at least 5 caracters "],
        maxlenght:[255,"{PATH} must be maximum 255 caracters"],

    },
    pages: {
        type: Number,
        //* validations
        required:[true, "{PATH} is required"],
        min:[1, "{PATH} must be at least 1 caracters "],
    },

    isAvailable: {
        type: String,
        //* validations
        required:[true,"{PATH} is required"],
        enum:["True","False"],
        default:"False",

    }
},{timestamps:true})

const book = new model("book", bookSchema)
export default book;