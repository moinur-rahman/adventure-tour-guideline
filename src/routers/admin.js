const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const Contact = require("../models/contact");

router.get("/admin", (req, res) => {
  res.render("admin", {
    dashRender: true,
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
    await User.findByIdAndUpdate(
       req.params.id ,
      {
        email,
      }
    );
  }
  if (name) {
    await User.findByIdAndUpdate(
       req.params.id ,
      {
        name,
      }
    );
  }
  if (password) {
    await User.findByIdAndUpdate(
       req.params.id ,
      {
        password,
      }
    );
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

router.get("/admin/contactMessage/:id",async (req,res)=>{
  const contact = await Contact.findById(req.params.id)
  
  res.render("admin",{
    contactMessageRender:true,
    contact
  })

})

module.exports = router;
