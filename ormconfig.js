module.exports = {
  "type": "postgres",
  "host": "localhost",
  "port": process.env.DATABASE_PORT,
  "username": process.env.DATABASE_USERNAME,
  "password": process.env.DATABASE_PASSWORD,
  "database": process.env.DATABASE_NAME,
  "synchronize": false,
  "logging": false,
  "entities": ["src/models/*.ts"],
  "migrations": ["src/database/migrations/*.ts"],
  "cli": {
    "migrationsDir": "src/database/migrations"
  }
}
