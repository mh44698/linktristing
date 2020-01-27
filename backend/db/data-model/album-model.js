const mongoose = require("../connection");

const AlbumsSchema = new mongoose.Schema({
  title: String,
  description: String,
  favorite: Boolean,
  categories: String,
  linklist: Array,
});
// instantiate the model, calling it "Bookmark" and with the schema we just made
const Albums = mongoose.model("Albums", AlbumsSchema);
// export the newly created model
module.exports = Albums