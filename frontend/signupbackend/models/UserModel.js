const mongoose = require("mongoose");

const User = new mongoose.Schema({
  /*
  fullName: {
    type: String,
    required: true,
  },
*/
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  cart: {
    type: Array,
    default: [],
  },
  liked: {
    type: Array,
    default: [],
  },
  forSale: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("mydb", User);
