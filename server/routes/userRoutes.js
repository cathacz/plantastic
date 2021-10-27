const express = require("express");
const router = express.Router();

const { login, register } = require("../controllers/authController");
const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);
router.post("/register", register);
router.post("/login", login);
module.exports = router;
