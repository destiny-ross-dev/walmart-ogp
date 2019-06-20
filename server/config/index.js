const merge = require("lodash/merge");
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const env = process.env.NODE_ENV;

const baseConfig = {
  port: 3123
};

let envConfig = {};

switch (env) {
  case "development":
  case "dev":
    envConfig = require("./dev");
    break;
  case "test":
  case "testing":
    envConfig = require("./test");
    break;
  case "prod":
  case "production":
    envConfig = require("./prod");
    break;
  default:
    envConfig = require("./dev");
}
const appConfig = merge(baseConfig, envConfig);
module.exports = appConfig;