const express = require("express");

const router = express.Router();
const {getTrendingMovie, getMovieTrailers, getMovieDetails, getSimilarMovies , getMoviesByCategory}= require("../controllers/movie.controller")


router.get("/trending", getTrendingMovie);
router.get("/:id/trailers", getMovieTrailers);
router.get("/:id/details", getMovieDetails);
router.get("/:id/similar", getSimilarMovies);
router.get("/:category", getMoviesByCategory);

module.exports = router;