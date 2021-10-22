require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
const routes = require("./routes/taskRoutes");
const taskRoute = require("./routes/taskRoutes");
/* const notFound = require("./middleware/not-found"); */

// cookie, session

const cookieParser = require("cookie-parser");
const expressSession = require("express-session");

// DB

const connectDB = require("./db/dbConnect");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}`));
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

module.exports = app;
