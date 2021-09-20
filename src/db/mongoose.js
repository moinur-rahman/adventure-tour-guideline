const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://moinur-rahman:SGmdv8t6iPECeKYQ@cluster0.txj2z.mongodb.net/adventure-tour-guideline?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
