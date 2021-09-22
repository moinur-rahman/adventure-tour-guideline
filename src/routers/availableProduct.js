const express = require("express");
const router = new express.Router();

router.get("/available-product",async (req,res)=>{
    res.render("shop")
})

router.get("/single",async (req,res) => {
    res.render("single")
})

module.exports = router;