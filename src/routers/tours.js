const express = require("express");
const User = require("../models/user");
const router = new express.Router();
const validator = require("validator");

router.get("/tours",(req,res)=>{
    res.render("tours")
})

router.get("/bangladesh",(req,res)=>{
    res.render("HomePage1/bangladesh/bangladesh")
})

module.exports = router