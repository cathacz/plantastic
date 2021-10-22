const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
// cookie, session
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");

const connectDB = require("./db/dbConnect");

// to process the data
app.use(express.json());
// Let Express understand  Content-Type: application/x-www-form-urlencoded aka form data

app.use(
  express.urlencoded({
    extended: true,
  })
);

// 404 page

// app.use(notFound);
// // cookies
// app.use(cookieParser());
// // Session
// app.use(
//   expressSession({
//     secret: "somethingSecret",
//     saveUninitialized: false,
//     resave: false,
//   })
// );

// Alow uploads
app.use("/uploads", express.static("uploads"));

// API Endpoints

app.get("/", (req, res) => {
  res.status(200).send("Wellcome to Plantastic");
});

module.exports = app;
