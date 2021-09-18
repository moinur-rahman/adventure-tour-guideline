const express = require("express");
const User = require("../models/user");
const router = new express.Router();
const validator = require("validator");

router.get("/", (req, res) => {
  res.render("HomePage");
});

// router.get("/success",(req,res)=>{
//   res.render("HomePage1/registration/success")
// })

router.get("/login", (req, res) => {
  res.render("HomePage1/registration/login");
});

router.post("/login", async (req, res) => {
  //console.log(req.query);

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
   // const token = await user.generateAuthToken();
    
    if (!user) {
      return res.render("HomePage1/registration/login", {
        errorMessage: "You are not registered",
      });
    }
    //console.log(user);

    if (user.password !== password) {
      return res.render("HomePage1/registration/login", {
        errorMessage: "Your password is wrong",
      });
    }
    
   // res.send({ user, token });
    res.render("HomePage1/registration/success",{
      message:"Login successful",
       user:JSON.stringify(user)
    })
  } catch (error) {}
});



router.get("/registration", (req, res) => {
  res.render("HomePage1/registration/registration");
});

router.post("/registration", async (req, res) => {
  const { name, email, password, repeatPassword } = req.body;

  if (!validator.isEmail(email)) {
    return res.render("HomePage1/registration/registration", {
      errorMessage: "Email is not valid",
    });
  }

  const duplicateUser = await User.findOne({ email });

  if (duplicateUser) {
    return res.render("HomePage1/registration/registration", {
      errorMessage: "Email you entered already registered",
    });
  }

  if (password !== repeatPassword) {
    return res.render("HomePage1/registration/registration", {
      errorMessage: "Password did not match",
    });
  }

  const user = new User({
    name,
    email,
    password,
  });
  try {
    const savedUser = await user.save();
    
   // const token =await user.generateAuthToken()
    res.render("HomePage1/registration/success", {
      message: "Registration successful",
      user:JSON.stringify(savedUser)
    });
  } catch (error) {
    console.log("Error detected");
  }
});

module.exports = router;
