const { Sequelize } = require('sequelize');

const sequelize = Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_CONNECTION,
  port: process.env.DB_PORT,
});

// check database connection
try {
  await sequelize.authenticate();
} catch (error) {
  throw new Error('database connection error');
}

module.exports = sequelize;
