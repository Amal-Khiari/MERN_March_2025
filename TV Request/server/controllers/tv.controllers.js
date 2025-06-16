import { tvShows } from "../models/tv.model.js";

export const getAllShows = (req, res) => {
  res.json(tvShows);
};

export const getShowsByYear = (req, res) => {
  const year = parseInt(req.params.year);
  const filtered = tvShows.filter(show => show.yearCreated === year);
  res.json(filtered);
};

export const deleteShow = (req, res) => {
  const title = req.params.title.toLowerCase();
  const index = tvShows.findIndex(show => show.tvShow.toLowerCase() === title);

  if (index === -1) return res.status(404).json({ message: "Show not found" });

  tvShows.splice(index, 1);
  res.json(tvShows);
};

export const updateStarring = (req, res) => {
  const title = req.params.title.toLowerCase();
  const show = tvShows.find(show => show.tvShow.toLowerCase() === title);

  if (!show) return res.status(404).json({ message: "Show not found" });

  show.starring = req.body.starring;
  res.json(show);
};

export const addShow = (req, res) => {
  const newShow = req.body;
  tvShows.push(newShow);
  res.status(201).json(tvShows);
};