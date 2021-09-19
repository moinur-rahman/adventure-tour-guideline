const express = require("express");
const router = new express.Router();

router.get("/review",(req,res)=>{
    res.render("review")
})

router.get("/services",(req,res)=>{
    res.render("services")
})

router.get("/about",(req,res)=>{
    res.render("")
})

module.exports = router