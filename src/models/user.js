const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) throw new Error("Email is invalid");
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
  },
  isAdmin:{
    type:Boolean,
    default:false,
  }
  // tokens: [
  //   {
  //     token: {
  //       type: String,
  //       require: true,
  //     },
  //   },
  // ],
});

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString() },
    "adventuretourguideline"
  );
  user.tokens = user.tokens.concat({token})
  await user.save()
  return token;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
