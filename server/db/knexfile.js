const path = require('path')
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, 'dev.sqlite3'),
      ssl: false,
    },
    useNullAsDefault: true
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:',
      ssl: false,
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    ssl: false,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}