const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const connectDB = async () => {
  try {
    await client.connect();
  } catch (error) {
    throw new Error("Error Connecting Postgres", error);
  }
};

module.exports = { client, connectDB };
