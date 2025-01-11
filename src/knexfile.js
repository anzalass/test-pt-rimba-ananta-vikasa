require("dotenv").config({ path: "../.env" });

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER, // Ganti dengan username PostgreSQL kamu
      password: process.env.DB_PASSWORD, // Ganti dengan password PostgreSQL kamu
      database: process.env.DB_NAME, // Ganti dengan nama database kamu
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
