const { Client, Connection } = require("pg");

const client = new Client({
  host: "localhost", // Alamat host PostgreSQL (misalnya 'localhost')
  port: 5432, // Port default PostgreSQL
  user: "postgres", // Ganti dengan username PostgreSQL kamu
  password: "123", // Ganti dengan password PostgreSQL kamu
  database: "pt_rimba", // Ganti dengan nama database kamu
});

const connectDB = async () => {
  try {
    await client.connect();
  } catch (error) {
    console.log("Database error");
  }
};

module.exports = { client, connectDB };
