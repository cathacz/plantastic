const express = require("express");
const router = express.Router();

const {
  login,
  register,
  forgotPassword,
} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);

router.put("forgot-password", forgotPassword);

module.exports = router;
