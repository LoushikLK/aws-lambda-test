const express = require("express");
const sls = require("serverless-http");

const app = express();

app.get("*", async (req, res) => {
  res.send("hello from express server.");
});

module.exports = sls(app);
