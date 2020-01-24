const mongoose = require("../db/link/connections");

const LinkSchema = new mongoose.Schema({
  title: String,
  description: String,
  favorite: Boolean,
  categories: String,
  linkfavorite: Boolean,
  linklist: String,
});
// instantiate the model, calling it "Bookmark" and with the schema we just made
const Links = mongoose.model("Links", LinkSchema);
// export the newly created model
module.exports = Links