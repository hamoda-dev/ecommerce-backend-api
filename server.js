const http = require('http');

const app = require('./app');

const { sequelize } = require('./models');

const server = http.createServer(app);

server.listen(process.env.APP_PORT, () => {
  try {
    sequelize.authenticate();
  } catch (error) {
    throw new Error('database connection failed');
  }
});
