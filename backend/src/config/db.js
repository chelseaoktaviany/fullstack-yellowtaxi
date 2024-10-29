const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

const sequelize = new Sequelize("yellowtaxitrip_db", "postgres", "test123", {
  logging: console.log,
  host: "localhost",
  dialect: "postgres",
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
  } catch (err) {
    console.log("Unable to connect to database: ", err);
  }
};

module.exports = sequelize;
