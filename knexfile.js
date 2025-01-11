// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
// module.exports = {

//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './dev.sqlite3'
//     }
//   },

//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }

// };

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
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
