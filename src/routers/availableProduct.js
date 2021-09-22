const express = require("express");
const Product = require("../models/product") 
const router = new express.Router();

router.get("/available-product",async (req,res)=>{
    const filteredProduct =await Product.find({})
   // console.log(product);
    try {
        res.render("shop",{
           filteredProduct
        })
    } catch (error) {
        
    }
    
})

router.post("/available-product", async (req,res) => {
   console.log(req.body.discount);
  
    try {
        const filteredProduct = await Product.find({discount: { $gte: req.body.discount}} )
        console.log(filteredProduct.length);
          res.render("shop",{
           
              filteredProduct:filteredProduct
          })
    } catch (error) {
        console.log(error); 
    }
    // res.redirect("/available-product")
})

router.get("/single",async (req,res) => {
    res.render("single")
})

module.exports = router;