const express = require("express");

const router = express.Router();

const {getTrendingTv,getTvTrailers , getTvDetails, getSimilarTvs, getTvsByCategory} = require("../controllers/tv.controller")


router.get("/trending", getTrendingTv);
router.get("/:id/trailers", getTvTrailers);
router.get("/:id/details", getTvDetails);
router.get("/:id/similar", getSimilarTvs);
router.get("/:category", getTvsByCategory);

module.exports = router;