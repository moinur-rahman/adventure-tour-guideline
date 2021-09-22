const mongoose = require("mongoose");
const validator = require('validator')
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
  userPhotoPath: {
    type: String,

    trim: true,
  },
  locationPhotoPath: {
    type: String,

    trim: true,
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

module.exports = Review;
