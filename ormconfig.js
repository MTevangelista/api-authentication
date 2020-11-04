module.exports = {
  "type": "postgres",
  "host": "localhost",
  "port": process.env.DATABASE_PORT,
  "username": process.env.DATABASE_USERNAME,
  "password": process.env.DATABASE_PASSWORD,
  "database": process.env.DATABASE_NAME,
  "synchronize": false,
  "logging": false,
  "entities": process.env.DATABASE_URL != process.env.DATABASE_URL_PRODUCTION ? ["src/models/*.ts"] : ["dist/models/*.js"],
  "migrations": process.env.DATABASE_URL != process.env.DATABASE_URL_PRODUCTION ? ["src/database/migrations/*.ts"] : ["dist/database/migrations/*.js"],
  "cli": {
    "migrationsDir": "src/database/migrations"
  }
}
