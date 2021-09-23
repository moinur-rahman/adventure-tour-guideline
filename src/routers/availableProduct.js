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
       // console.log(filteredProduct.length);
          res.render("shop",{
           
              filteredProduct:filteredProduct
          })
    } catch (error) {
        console.log(error); 
    }
    // res.redirect("/available-product")
})

router.get("/single/:id",async (req,res) => {
    const product =await Product.findById(req.params.id)
   //console.log(product);
    res.render("single",{
        product
    })
})

router.post("/single",async (req,res) => {
    console.log(req.body);
})

module.exports = router;