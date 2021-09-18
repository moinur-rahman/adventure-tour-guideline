const express = require('express')
const router = express.Router()

router.get("/profile",async (req,res)=>{
    res.render("profile",{
        profilePaymentRender:true
    })
}) 

router.get("/profile/settings",async (req,res)=>{
   res.render("profile",{
       profileSettingsRender:true
   })
})

module.exports = router