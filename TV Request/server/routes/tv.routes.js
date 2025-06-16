import express from "express";
import {
  getAllShows,
  getShowsByYear,
  deleteShow,
  updateStarring,
  addShow
} from "../controllers/tv.controllers.js";



const router = express.Router();

router.get("/", getAllShows);
router.get("/:year", getShowsByYear);
router.delete("/:title", deleteShow);
router.patch("/:title", updateStarring);
router.post("/", addShow);

export default router;