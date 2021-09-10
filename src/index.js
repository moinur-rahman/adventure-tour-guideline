const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
require("./db/mongoose");
//Router
const userRouter = require("./routers/user");
const paymentRouter = require("./routers/payment");
const toursRouter = require('./routers/tours')
const travelRouter = require('./routers/travel')
const galleryRouter = require('./routers/gallery')
const reviewRouter = require("./routers/review")
const contactRouter = require("./routers/contact")

const hbs = require("hbs");

const app = express();

const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(userRouter);
app.use(paymentRouter);
app.use(toursRouter)
app.use(travelRouter)
app.use(galleryRouter)
app.use(reviewRouter)
app.use(contactRouter)

app.listen(port, () => {
  console.log("Server is up on port 3000!");
});
