const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, trim: true, required: (true, "email is required") },
  password: { type: String, trim: true, required: true },
  name: { type: String, trim: true, required: true },
  userAddedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
