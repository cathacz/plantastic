const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = Schema({});

const Plant = mongoose.model("plant", plantSchema, "plant");

modules.exports = Plant;
