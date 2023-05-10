const mongoose = require("mongoose");

require("dotenv").config();

const init = () => {
  const url = process.env.DB_URL;
  const username = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;
  const dbname = process.env.DB_NAME;
  const dsn = `mongodb+srv://${username}:${password}@${url}/${dbname}?retryWrites=true&w=majority`;
  console.log(dsn);
  mongoose.connect(dsn);
};

module.exports = {
  init
};
