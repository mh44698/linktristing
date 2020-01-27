const mongoose = require("../connection");

const LinkSchema = new mongoose.Schema({
  title: String,
  tags: Array,
  link: String,
  parent: {
    ref: "Collection",
    type: mongoose.Schema.Types.ObjectId
  }
});

const Links = mongoose.model("Links", LinkSchema);

module.exports = Links