const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

const sequelize = new Sequelize(
  process.env.PSQL_DB,
  process.env.PSQL_USER,
  String(process.env.PSQL_PASSWORD),
  {
    logging: console.log,
    host: process.env.PSQL_LOCALHOST,
    dialect: "postgres",
  }
);

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
  } catch (err) {
    console.log("Unable to connect to database: ", err);
  }
};

module.exports = sequelize;
