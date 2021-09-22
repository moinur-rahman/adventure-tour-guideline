const express = require("express");
const Product = require("../models/product") 
const router = new express.Router();

router.get("/available-product",async (req,res)=>{
    res.render("shop")
})

router.get("/available-product/:discount", async (req,res) => {
   console.log(req.params.discount);
   
    const product = new Product({
        name:"Radio",
        imageLink:"http://www.tourtoday.com.bd/shop/wp-content/uploads/2018/09/1075070981-1-300x300.jpg",
        price:575,
        
    })
    try {
        await product.save()
    } catch (error) {
        
    }
    res.redirect("/available-product")
})

router.get("/single",async (req,res) => {
    res.render("single")
})

module.exports = router;