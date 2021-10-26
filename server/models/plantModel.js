const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = Schema({
  _id: Schema.Types.ObjectId,
});

const Plant = mongoose.model("plant", plantSchema, "plant");

modules.exports = Plant;
