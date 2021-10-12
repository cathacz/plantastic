const mongoose = require("mongoose");
const usersDataSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  geoLocation: {
    type: String,
    trim: true,
    // maybe add more keys for city, or land
  },
  // Can be in separate document in db
  userPlants: {
    type: String,
  },
  // think when id is needed and where
  userTasks: {
    //  id: id,
    type: String,
  },
  //     age: {
  //     type: Number,
  //   },
  add: String,
  userAddedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
// create new collection
module.exports = mongoose.model("UsersData", usersDataSchema);
// work on old collection that we have
// module.exports = mongoose.model("UsersData",usersDataSchema, "UsersData");
