const mongoose = require("mongoose");

const User = mongoose.model("User", {
  email: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
    default: "",
  },

  salt: String,
  token: String,
  hash: String,
});

module.exports = User;
