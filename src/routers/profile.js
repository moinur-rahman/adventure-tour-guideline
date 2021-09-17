const express = require('express')
const router = express.Router()

router.get("/profile",async (req,res)=>{
    res.render("profile",{
        profileDashRender:true
    })
})

router.get("/profile/reviews",async (req,res)=>{
   res.render("profile",{
       profileReviewsRender:true
   })
})

module.exports = router