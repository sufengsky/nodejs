const user = require("./user");
const demo = require("./demo");

module.exports = (app) => {
  app.use(user);
  app.use("/demo", demo);
};
