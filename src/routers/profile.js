const express = require("express");
const User = require("../models/user");
const Payment = require("../models/payment");
const Contact = require("../models/contact")
const router = express.Router();

router.get("/profile/:id", async (req, res) => {
  const user = await User.findById(req.params.id);

  const payment = await Payment.find({ email: user.email });
  
  //console.log(user);

  res.render("profile", {
    profilePaymentRender: true,
    payment,
  });
});

router.get("/profile/settings/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.render("profile", {
      profileSettingsRender: true,
      user,
    });
  } catch (error) {}
});

router.post("/profile/settings/:id", async (req, res) => {
  try {
    const path = "/profile/settings/" + req.params.id;

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
  } catch (error) {
    console.log(error);
  }
});

router.get("/profile/contactMessage/:id",async (req,res)=>{
  try {
    const user =await User.findById(req.params.id)
    const contact = await Contact.find({email:user.email})
    
    res.render("profile",{
      profileContactRender:true,
      contact
    })
  } catch (error) {
    console.log(error);
  }
  

})

module.exports = router;
