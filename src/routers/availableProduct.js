const express = require("express");
const Product = require("../models/product") 
const router = new express.Router();

router.get("/available-product",async (req,res)=>{
    const product =await Product.find({})
   // console.log(product);
    try {
        res.render("shop",{
            product
        })
    } catch (error) {
        
    }
    
})

router.get("/available-product/:discount", async (req,res) => {
   
const filteredProduct = await fin

    try {
      //  await product.save()
    } catch (error) {
        
    }
    res.redirect("/available-product")
})

router.get("/single",async (req,res) => {
    res.render("single")
})

module.exports = router;