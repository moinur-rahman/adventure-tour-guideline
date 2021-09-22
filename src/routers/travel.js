const express = require("express");
const router = new express.Router();


router.get("/travelling-style",async (req,res)=>{
  res.render("TravellingStyle")
})

router.get("/travelling-type",async (req,res)=>{
  res.render("TravellingType")
})

router.get("/hotels", (req, res) => {
  res.render("hotels");
});



router.get("/hotel-room",(req,res)=>{
  res.render("hotel-room")
})


module.exports = router;
