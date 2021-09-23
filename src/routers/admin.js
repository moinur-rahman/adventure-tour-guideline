const express = require("express");
const router = new express.Router();

const Product = require("../models/product") 
const User = require("../models/user");
const Payment = require("../models/payment")
const Contact = require("../models/contact");

router.get("/admin",async (req, res) => {
  const user = await User.find({});

  // console.log(user);

  res.render("admin", {
    userRender: true,
    user,
  });
});

router.get("/admin/user", async (req, res) => {
  const user = await User.find({});

  // console.log(user);

  res.render("admin", {
    userRender: true,
    user,
  });
});

router.get("/admin/user/edit/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({ _id: id });

  res.render("admin", {
    userEditRender: true,
    user,
  });

  //console.log(user);

  // res.redirect("/admin/user");
});

router.post("/admin/user/edit/:id", async (req, res) => {
  const path = "/admin/user/edit/" + req.params.id;

  const { email, name, password } = req.body;

  if (email) {
    await User.findByIdAndUpdate(req.params.id, {
      email,
    });
  }
  if (name) {
    await User.findByIdAndUpdate(req.params.id, {
      name,
    });
  }
  if (password) {
    await User.findByIdAndUpdate(req.params.id, {
      password,
    });
  }

  // console.log(user);
  res.redirect(path);
});

router.get("/admin/user/delete/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.deleteOne({ _id: id });

  // console.log(user);

  res.redirect("/admin/user");
});

router.get("/admin/contactMessage", async (req, res) => {
  const contact = await Contact.find({});

  res.render("admin", {
    contactRender: true,
    contact,
  });
});

router.get("/admin/contactMessage/:id", async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  res.render("admin", {
    contactMessageRender: true,
    contact,
  });
});


router.get("/admin/contactMessage/delete/:id",async (req,res)=>{
   const contact = await Contact.deleteOne({_id:req.params.id})
   console.log(contact);
   res.redirect("/admin/contactMessage")
})

router.get("/admin/payment",async (req,res) => {
const payment = await Payment.find({})

try {
  res.render("admin",{
    paymentRender:true,
    payment
  })
} catch (error) {
  console.log(error);
}

})

router.get("/admin/payment/:id",async (req,res) =>{
const payment = await Payment.findById(req.params.id)
try {
  res.render("admin",
  {
    paymentViewRender:true,
    payment
  })
} catch (error) {
  
}
})

router.get("/admin/payment/delete/:id", async (req, res) => {
  const id = req.params.id;
 const user = await Payment.deleteOne({_id:id});

   console.log(user);

  res.redirect("/admin/payment");
});

router.get("/admin/product", async (req, res) => {
  res.render("admin", {
    productRender:true,
  });
})



router.post("/admin/product", async (req, res) => {
 const {name,imageLink,price,discount} = req.body
  const product = new Product({
     name,
     imageLink,
      price,
      discount
 })
 try {
    await product.save()
 } catch (error) {
    console.log(product);
 }

  res.redirect("/admin/product")
});

router.get("/admin/productList",async (req,res) =>{
  const product =await Product.find({})
  
  res.render("admin",{
  
    productListRender:true,
    product
  
  })
})
router.get("/product/delete/:id",async (req,res)=>{
  await Product.deleteOne({_id:req.params.id})
  
  res.redirect("/admin/productList")
})

module.exports = router;
