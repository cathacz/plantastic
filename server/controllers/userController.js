const User = require("../models/userModel");

const getUser = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = {
  getUser,
};
