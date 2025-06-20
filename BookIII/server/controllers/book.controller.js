import Book from "../models/book.model.js";

async function createBook(req, res) {
    try {
        const newBook = await Book.create(req.body);
        res.json(newBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
} 
async function getAllBook(req, res) {
    try {
        const allBook = await Book.find(); // here is our query to find book
        res.json(allBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error); // here is our error response
    }
}
async function getOneBook(req, res) {
    try {
        const foundBook = await Book.findById(req.params.id);
        res.json(foundBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
async function deleteOneBook(req, res) {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        res.json(deletedBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
export  {createBook, getAllBook,getOneBook, deleteOneBook}