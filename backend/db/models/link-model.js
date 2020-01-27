const mongoose = require("../connection");

const LinkSchema = new mongoose.Schema({
  title: String,
  tags: [],
  link: String,
  parent: {
    ref: "Collection",
    type: mongoose.Schema.Types.ObjectId
  }
});
// instantiate the model, calling it "Bookmark" and with the schema we just made
const Links = mongoose.model("Links", LinkSchema);
// export the newly created model
module.exports = Links