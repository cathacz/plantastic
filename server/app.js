const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
const authenticateUser = require("./middleware/auth");
const authRoutes = require("./routes/authRoutes");
const taskRoute = require("./routes/taskRoutes");
const userRoute = require("./routes/userRoutes");
const plantRoute = require("./routes/plantRoute");
require("dotenv").config();

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
/* app.use(express.static("./public")); */

// Let Express understand  Content-Type: application/x-www-form-urlencoded aka form data

app.use(
  express.urlencoded({
    extended: true,
  })
);

// Alow uploads

app.use("/uploads", express.static("uploads"));

// API Endpoints

// main route

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Plantastic");
});

app.use("/auth", authRoutes);
app.use("/tasks", authenticateUser, taskRoute);
app.use("/users", userRoute);
app.use("/plants", plantRoute);

console.log("From app.js");

module.exports = app;
