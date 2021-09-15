const express = require("express");
const router = new express.Router();


router.get("/privacyPolicy",(req,res)=>{
    res.render("privacyPolicy")
})

router.get("/AffiliateProgram",(req,res)=>{
    res.render("AffiliateProgram")
})

router.get("/TermsAndConditions",(req,res)=>{
    res.render("TermsAndConditions")
})

module.exports = router