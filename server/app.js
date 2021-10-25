const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
const taskRoute = require("./routes/taskRoutes");
const userRoute = require("./routes/userRoutes");
const plantRoute = require("./routes/plantRoute");
require("dotenv").config();

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

// to process the data

app.use(express.json());

// Let Express understand  Content-Type: application/x-www-form-urlencoded aka form data

app.use(
  express.urlencoded({
    extended: true,
  })
);

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
app.use("/plants", plantRoute);

console.log("From app.js");

// Error handler -- where to place in code?

app.use((req, res, next) => {
  const error = new Error("Not Found!!!");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: { message: error.message } });
});

module.exports = app;
