const express = require("express");
const router = new express.Router();

router.get("/blog", (req, res) => {
    res.render("blog");
  });
  
router.get("/story",(req,res)=>{
    res.render("HomePage1/ShortStory/story")
})

router.get("/photos",(req,res)=>{
    res.render("photos")
})

router.get("/videos",(req,res)=>{
    res.render("videos")
})

module.exports = router;