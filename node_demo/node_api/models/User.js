const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("test", "root", "sufeng", {
  host: "127.0.0.1",
  dialect: "mysql",
  query: { raw: true },
});

const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "user",
    timestamps: false,
  }
);

async function getUsers() {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    console.log(error.name);
  }
}

module.exports.getUsers = getUsers;
