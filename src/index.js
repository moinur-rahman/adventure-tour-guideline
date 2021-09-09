const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
require("./db/mongoose");
//Router
const userRouter = require("./routers/user");
const paymentRouter = require("./routers/payment");
const tourRouter = require('./routers/tours')

const hbs = require("hbs");

const app = express();

const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");

app.set("view engine", "hbs");
app.set("views", viewsPath);

app.use(express.static(publicDirectoryPath));

//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(userRouter);
app.use(paymentRouter);
app.use(tourRouter)

app.listen(port, () => {
  console.log("Server is up on port 3000!");
});
