const express = require("express");
const Contact = require("../models/contact")
const router = new express.Router();

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.post("/contact",async (req, res) => {
  console.log(req.body);
  const {firstName,lastName,email,subject,message} = req.body

  const contact = new Contact({
      firstName,lastName,email,subject,message
  })
  
  try {
      await contact.save()
      res.render("HomePage1/registration/success",{
          message:"Message sent successfully"
      })
  } catch (error) {
      console.log(error);
  }
});

module.exports = router;
