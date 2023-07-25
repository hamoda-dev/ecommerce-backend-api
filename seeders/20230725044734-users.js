const { v4: uuidv4 } = require('uuid');

const { hashPassword } = require('../utils/password');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert('users', [{
      id: uuidv4(),
      name: 'Admin',
      email: 'admin@admin.com',
      password: await hashPassword('111'),
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  // eslint-disable-next-line
  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('users', null, {});
  },
};
