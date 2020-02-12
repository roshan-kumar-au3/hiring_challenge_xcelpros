const Sequelize = require("sequelize");
const UserModel = require("./model/User");

const sequelize = new Sequelize("xcelpros", "postgres", "9939105936", {
  host: "localhost",
  dialect: "postgres"
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database Connected");
    sequelize.sync();
  })
  .catch(err => console.error("Unable To Connect to Database", err));

let User = UserModel(sequelize, Sequelize);

module.exports = {
  User
};
