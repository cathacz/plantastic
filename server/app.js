const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
// const routes = require("./routes/taskRoutes");
const taskRoute = require("./routes/taskRoutes");
const userRoute = require("./routes/userRoutes");
require("dotenv").config();
/* const notFound = require("./middleware/not-found"); */

// cookie, session

const cookieParser = require("cookie-parser");
const expressSession = require("express-session");

// DB

const connectDB = require("./db/dbConnect");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("DB is connected 😎");
  } catch (err) {
    console.log(err);
  }
};

start();

// mongoDB
/* const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected 😎"))
  .catch((error) => {
    console.log(`There was a problem ${error.message}`);
  });
 */
// to process the data

app.use(express.json());

// Let Express understand  Content-Type: application/x-www-form-urlencoded aka form data

app.use(
  express.urlencoded({
    extended: true,
  })
);

// 404 page

/* app.use(notFound); */

// Cookies

app.use(cookieParser());

// Session

app.use(
  expressSession({
    secret: "somethingSecret",
    saveUninitialized: false,
    resave: false,
  })
);

// Alow uploads
app.use("/uploads", express.static("uploads"));

// API Endpoints

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Plantastic");
});

app.use("/tasks", taskRoute);
app.use("/users", userRoute);

console.log("From app.js");

module.exports = app;
