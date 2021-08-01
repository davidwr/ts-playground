module.exports = {
  "type": "mysql",
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USER,
  "password": "mysql",
  "database": process.env.DB_NAME,
  "synchronize": true,
  "logging": true,
  "entities": ["src/models/*.ts"],
  "migrations": ["src/migration/*.ts"],
  "subscribers": ["src/subscriber/**/*.ts"],
  "extra": {
    "connectionLimit": 5
  },
  "cli": {
    "migrationsDir": "src/migration"
  }
}
