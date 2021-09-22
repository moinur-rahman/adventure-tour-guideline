const express = require("express");
const Review = require("../models/review");
const multer = require("multer");
const path = require("path");
const router = new express.Router();

//Set storage engine
const uploadDirectoryPath = path.join(__dirname, "../../public/uploads");
const storage = multer.diskStorage({
  destination: uploadDirectoryPath,
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

//Init Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

router.get("/review", async (req, res) => {
  try {
    const reviews =await Review.find({});
    res.render("review", { reviews });
   // console.log(reviews);
  } catch (error) {}
});

router.post("/review", upload.array("photos", 2), async (req, res) => {
  const { name, email, place, newPlace, reviewMessage, fbLink, twitterLink } =
    req.body;

  const userPhotoPath = "/uploads/" + req.files[0].filename;
  const locationPhotoPath = "/uploads/" + req.files[1].filename;

  const review = new Review({
    name,
    userPhotoPath,
    email,
    place,
    newPlace,
    locationPhotoPath,
    reviewMessage,
    fbLink,
    twitterLink,
  });
  try {
    const reviewMessage = await review.save();
   // console.log(reviewMessage);
  } catch (error) {
    console.log(error);
  }
  res.redirect("/review")
  //res.render("review");
});

router.get("/details/:id",async (req,res) => {
  const id = req.params.id;
  const review = await Review.findOne({ _id: id });

  res.render("Details",{
    review
  })
})

module.exports = router;
