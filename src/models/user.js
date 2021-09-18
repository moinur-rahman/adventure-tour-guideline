const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value))
            throw new Error("Email is invalid")
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:6
    },
})



const User = mongoose.model("User",userSchema)

module.exports = User