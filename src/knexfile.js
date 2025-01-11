module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres", // Ganti dengan username PostgreSQL kamu
      password: "123", // Ganti dengan password PostgreSQL kamu
      database: "pt_rimba", // Ganti dengan nama database kamu
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
