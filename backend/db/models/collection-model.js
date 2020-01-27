const mongoose = require("../connection");

const CollectionSchema = new mongoose.Schema({
  title: String,
  description: String,
  tags: [],
  linklist: Array,
  parent: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId
  }
});
// instantiate the model, calling it "Bookmark" and with the schema we just made
const Collection = mongoose.model("Collection", CollectionSchema);
// export the newly created model
module.exports = Collection