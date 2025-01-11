require("dotenv").config({ path: "../.env" });

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: "./migrations",
      extension: "js",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};

console.log(process.env.DB_PASSWORD);
