const mongoose = require("../connection");

const UsersSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  password: String,
  email: String,
  image: String,
  collections: [
    {
      ref: "Collection",
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

const User = mongoose.model("User", UsersSchema);

module.exports = User