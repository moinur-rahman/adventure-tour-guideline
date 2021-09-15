const express = require("express");
const router = new express.Router();
const User = require("../models/user");

router.get("/admin", (req, res) => {
  res.render("admin", {
    dash: true,
  });
});

router.get("/admin/user", async (req, res) => {
  const user = await User.find({});

 // console.log(user);

  res.render("admin", {
    userRender:true,
    user: user,
  });
});


router.get("/admin/user/edit/:id",async (req,res)=>{
    const id = req.params.id
  const user = await User.findOneAndUpdate({_id:id},{email:"abc@gmail.com"})
  
  console.log(user);

  res.redirect("/admin/user")
})

router.get("/admin/user/delete/:id",async (req,res)=>{
    const id = req.params.id
  const user = await User.findOneAndDelete({_id:id})
  
  console.log(user);

  res.redirect("/admin/user")
})

router.get("/admin/contactMessage", (req, res) => {
  res.render("admin", {
    contactMessage: true,
  });
});

module.exports = router;
