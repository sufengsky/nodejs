const express = require("express");

const demoRoute = express.Router();

demoRoute.get("/index", (req, res) => {
  let user = {
    name: "SF",
    age: 20,
  };
  res.json(user);
});

module.exports = demoRoute;
