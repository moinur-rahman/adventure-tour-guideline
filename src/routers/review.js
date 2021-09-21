const express = require("express");
const Review = require("../models/review");
const router = new express.Router();

router.get("/review", async (req, res) => {
  res.render("review");
});

router.post("/review", async (req, res) => {
  const {
    name,
    userPhoto,
    email,
    place,
    newPlace,
    locationPhoto,
    reviewMessage,
    fbLink,
    twitterLink,
  } = req.body;

  const review = new Review({
    name,
    userPhoto,
    email,
    place,
    newPlace,
    locationPhoto,
    reviewMessage,
    fbLink,
    twitterLink,
  });

  console.log(review);

  res.render("review");
});

module.exports = router;
