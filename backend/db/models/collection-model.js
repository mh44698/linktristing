const mongoose = require("../connection");

const CollectionSchema = new mongoose.Schema({
  title: String,
  description: String,
  tags: Array,
  linklist: [
    {
      ref: "Link",
      type: mongoose.Schema.Types.ObjectId
    }
  ],
  parent: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId
  }
});

const Collection = mongoose.model("Collection", CollectionSchema);

module.exports = Collection