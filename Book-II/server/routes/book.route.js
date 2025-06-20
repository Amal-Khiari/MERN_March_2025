import  {createBook, getAllBook,getOneBook, deleteOneBook} from "../controllers/book.controller.js"
import { Router } from "express"

//! Create an object from "Router built-in class" called router
const router = Router()
// 1. Route for Create a book feature 
router.route("/book").post(createBook)
// 2. Route get All book
router.route("/book/:id").get(getOneBook)
 // 3. Route for Read one
router.route("/book/all").get(getAllBook)
// 4. Route for delete one book 
router.route("/book/delet/:id").get(deleteOneBook)
export default router 