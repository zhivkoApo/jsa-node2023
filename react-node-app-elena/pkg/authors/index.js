const mongoose = require("mongoose");

const Author = mongoose.model(
  "authors",
  {
    handle: String,
    fullName: String,
  },
  "authors"
);

const getByHandle = async (handle) => {
  return Author.findOne({ handle });
};

const getAll = async () => {
  return Author.find({});
};

module.exports = {
  getByHandle,
  getAll,
};
