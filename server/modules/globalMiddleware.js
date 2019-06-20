const bodyParser = require("body-parser");
const logger = require("morgan-body");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require('cookie-parser');

const setGlobalMiddleware = app => {
  // parses url-encoded data (parameters) with the querystring library when true.
  app.use(bodyParser.urlencoded({ extended: false }));

  // Parses req.body, making it readable on the request object
  app.use(bodyParser.json());
  // Parses cookies
  app.use(cookieParser())

  // Enables Cross Origin Resource Sharing
  app.use(cors());


  //Logging middleware for request and response bodies
  logger(app);

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000000 * 60 * 60 * 24 * 14
      }
    })
  );
}
module.exports = setGlobalMiddleware;