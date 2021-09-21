const mongoose = require("mongoose");

const Review = mongoose.model("Review", {
  name: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  place: {
    type: String,

    trim: true,
  },
  newPlace: {
    type: String,
    trim: true,
  },
  locationPhoto: {
    type: String,
    trim: true,
  },
  reviewMessage: {
    type: String,
    require: true,
    trim: true,
  },
  fbLink: {
    type: String,
    trim: true,
  },
  twitterLink: {
    type: String,
    trim: true,
  },
});


module.exports = Review