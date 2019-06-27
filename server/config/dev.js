require("dotenv").config();
module.exports = {
  db: process.env.CONNECTION_STRING,
  sessionSecret: process.env.SESSION_SECRET
};
