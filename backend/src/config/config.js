const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

module.exports = {
  development: {
    username: process.env.PSQL_USER,
    password: String(process.env.PSQL_PASSWORD),
    database: process.env.PSQL_DB,
    host: String(process.env.PSQL_HOST),
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USER,
    password: String(process.env.PSQL_PASSWORD),
    database: process.env.PSQL_DB,
    host: String(process.env.PSQL_HOST),
    dialect: "postgres",
  },
};
