const express = require("express");
const router = new express.Router();

router.get("/tours", (req, res) => {
  res.render("tours");
});

router.get("/tour-place",(req, res) => {
  res.render("tour-place");
})

router.get("/geographical", (req, res) => {
  res.render("HomePage1/GEOGRAPHICAL-PLACES/geographical");
});

router.get("/tracking", (req, res) => {
  res.render("HomePage1/TRACKING/TRACKING");
});

router.get("/river", (req, res) => {
  res.render("River");
});

router.get("/bangladesh", (req, res) => {
  res.render("HomePage1/bangladesh/bangladesh");
});

module.exports = router;
