const fs = require("fs");
const path = require("path");
const express = require("express");
const Payment = require("../models/payment");
const router = new express.Router();
const validator = require("validator");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
});

router.get("/payment", (req, res) => {
  res.render("payment");
});

router.post("/payment", async (req, res) => {
  const {
    fullName,
    email,
    address,
    city,
    state,
    zip,
    phoneNo,
    tnxID,
    password,
    type,
    amount,
    agree,
  } = req.body;
  const payment = new Payment({
    fullName,
    email,
    address,
    city,
    state,
    zip,
    phoneNo,
    tnxID,
    password,
    type,
    amount,
    agree,
  });

  const sentMessage =
    "Your payment details" +
    "\n" +
    "Full Name: " +
    fullName +
    "\n" +
    "Email: " +
    email +
    "\n" +
    "Address: " +
    address +
    "\n" +
    "City: " +
    city +
    "\n" +
    "State: " +
    state +
    "\n" +
    "Zip: " +
    zip +
    "\n" +
    "Phone No: " +
    phoneNo +
    "\n" +
    "Transaction Id:" +
    tnxID +
    "\n" +
    "type: " +
    type +
    "\n" +
    "Amount: " +
    amount +
    "\n";

  const mailOptions = {
    from: "adventure374650@gmail.com",
    to: email,
    subject: "Payment to Adventure Tour Guideline",
    text: sentMessage,
  };

 // console.log(req.body);
  try {
    await payment.save();
     await transporter.sendMail(mailOptions);
    
    res.render("success",{
      message:"Payment successful",
      user:JSON.stringify({
        name:"payment"
      })
    })

    // res.render("HomePage1/registration/success", {
    //   message: "Payment Successful",
    // })
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
