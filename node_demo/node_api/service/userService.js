// const { Sequelize } = require("sequelize");
const User = require("../models/User");

// const sequelize = new Sequelize("test", "root", "sufeng", {
//   host: "127.0.0.1",
//   dialect: "mysql",
// });

// async function test() {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// }

async function getUsers() {
  const users = await User.getUsers();
  return users;
}

module.exports.getUsers = getUsers;
