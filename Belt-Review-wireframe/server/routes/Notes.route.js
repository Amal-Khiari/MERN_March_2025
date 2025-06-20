import{
    createNotes,
    getAllNotes,
    getOneNotes,
    updateOneNotes,
    deleteOneNotes
} from "../controllers/Notes.controller.js";

import { Router } from "express";
//! Create an install or object from this class Router Called router 
const router = Router();

//1 Router for this create Notes feature 
router.route("/notes/create").post(createNotes)
//2 Router for this get All Notes  feature 
router.route("/notes/all").get(getAllNotes)
//3 Router for this get One Notes feature 
router.route("/notes/:id").get(getOneNotes)
//4 Router for this get One Notes feature 
router.route("/notes/update/:id").put(updateOneNotes)
//5 Router for this get One Notes feature 
router.route("/notes/delete/:id").delete(deleteOneNotes)

export default router;