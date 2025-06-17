import bookcontroller from "../controllers/book.controller.js";
import { Router } from "express";

//! Create an object from "Router built-in class" called router
 const  router = Router ()

 // 1. Route for Create a book feature 
 router.route("/book/create").post(bookcontroller.createbook)

 // 2. Route get All book
 router.route("/book").get(bookcontroller.getAllbook) 

 // 3. Route for Read one
 router.route("/book/:id").get(bookcontroller.getOnebook)

 // 4. Route for Edit book
 router.route("book/edit/:id").put(bookcontroller.updateOnebook)

 // 5. Route for delete one book 
 router.route("/book/:id/delete").delete(bookcontroller.deleteOnebook)

export default Router;