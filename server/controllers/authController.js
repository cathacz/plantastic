require("dotenv").config();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  // compare password
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

// forgot password

const forgotPassword = (req, res) => {
  res.render("forgot-password");
  const { email } = req.body;
  console.log(req.body);

  User.findOne({ email }, (err, user) => {
    if (!err || user) {
      const secret = process.env.JWT_SECRET + user.password;
      const payload = {
        email: user.email,
        _id: user.id,
      };
      const token = jwt.sign(payload, secret, { expiresIn: "15m" });
      const link = `http://localhost:5000/auth/reset-password/${user._id}/${token}`;
      console.log(link);
      res.send("Password reset link was sent to your email.");
    } else {
      res.status(400).json({ error: "No user wit this email" });
    }
  });
};

// reset password

const resetPasswordGet = async (req, res) => {
  const { id, token } = req.params;
  /* res.send(req.params); */

  // check if exist in DB
  const user = await User.findById(id);
  console.log(user);
  if (!id) {
    throw new UnauthenticatedError("Please provide ID");
  }
  if (id !== user.id) {
    throw new BadRequestError("Invalid ID");
  }
  const secret = process.env.JWT_SECRET + user.password;
  try {
    const payload = jwt.verify(token, secret);
    res.render("reset-password", { email: user.email });
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

const resetPasswordPost = (req, res) => {
  const { id, token } = req.params;

  console.log("reset post");
  res.send(user);
};

module.exports = {
  register,
  login,
  forgotPassword,
  resetPasswordGet,
  resetPasswordPost,
};
