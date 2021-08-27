const mongoose = require("mongoose");

// schema is use to atructure a db
var authorSchema = mongoose.Schema(
  {
    id: Number,
    name: {
      type: String,
      require: true,
    },
    books: Array,
  },
  {
    strict: false,
  }
);

// Author is collection and that collection will follow that particular schema
const author = mongoose.model("Author", authorSchema);

module.exports = author;
