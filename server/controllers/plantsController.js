const Plant = require("../models/plantModel");

const getAllPlants = async (req, res) => {
  try {
    const plants = await Plant.find({});
    res.status(200).json({ plants });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = {
  getAllPlants,
};
