const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
// require("./db/mongoose");
//Router
const userRouter = require("./routers/user");
const paymentRouter = require("./routers/payment");
const toursRouter = require("./routers/tours");
const travelRouter = require("./routers/travel");
const galleryRouter = require("./routers/gallery");
const reviewRouter = require("./routers/review");
const contactRouter = require("./routers/contact");
const footerRouter = require("./routers/footer");
const adminRouter = require("./routers/admin");
const profileRouter = require("./routers/profile");
const availableProductRouter = require("./routers/availableProduct");

const hbs = require("hbs");

const app = express();

const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath37 = path.join(__dirname, "../templates/views37");
const viewsPath46 = path.join(__dirname, "../templates/views46");
const viewsPath50 = path.join(__dirname, "../templates/views50");

const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", [viewsPath37, viewsPath46, viewsPath50]);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(userRouter);
app.use(paymentRouter);
app.use(toursRouter);
app.use(travelRouter);
app.use(galleryRouter);
app.use(reviewRouter);
app.use(contactRouter);
app.use(footerRouter);
app.use(adminRouter);
app.use(profileRouter);
app.use(availableProductRouter)

app.listen(port, () => {
  console.log("Server is up on port 3000!");
});
