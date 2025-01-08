const path = require('path');

module.exports = {
  development: {
    debug: false,
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite3'),
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'knex', 'migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'knex', 'seeds'),
    },
  },

};
