const mongoose = require("../connection");

const UsersSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  password: String,
  email: String,
  image: String,
  albums: Array,
});
// instantiate the model, calling it "Bookmark" and with the schema we just made
const Users = mongoose.model("Users", UsersSchema);
// export the newly created model
module.exports = Users