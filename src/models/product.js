const mongoose = require("mongoose");

const Product = mongoose.model("Product",{
  name:{
    type:String
  },
  imageLink:{
   type:String
  },
  price:{
   type:Number
  },
  discount:{
      type:Number
  }
})

module.exports = Product;