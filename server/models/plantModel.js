const mongoose = require("mongoose");

const PlantSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true },
  plantAddedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Plant", PlantSchema);
