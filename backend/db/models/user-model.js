const mongoose = require("../connection");

const UsersSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  password: String,
  email: String,
  image: String,
  collections: Array,
});
// instantiate the model, calling it "Bookmark" and with the schema we just made
const User = mongoose.model("User", UsersSchema);
// export the newly created model
module.exports = User