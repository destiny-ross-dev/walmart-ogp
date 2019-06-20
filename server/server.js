const express = require("express");
const config = require("./config");
const connect = require("./modules/db");
const useGlobalMiddleware = require("./modules/globalMiddleware");
const authRouter = require("./api/auth/authRouter");

const port = config.port;

// Initializes express server
const app = express();

// Global middleware
useGlobalMiddleware(app);

app.use("/auth", authRouter);
app.use("*", (req, res) => res.status(200).send({data:"SERVER SET UP SMOKE TEST"}))

const start = async () => {
  try {
    await connect(app);
    app.listen(port, () => {
      console.log(`rest api on http://localhost:${port}/`);
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = { start };
