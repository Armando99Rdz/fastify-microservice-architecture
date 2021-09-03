'use strict';
const { encrypt } = require('../../utils/hash')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
		{
			firstName: 'John',
			lastName: 'Doe',
			email: 'john@doe.com',
			password: encrypt('john'),
			createdAt: new Date,
			updatedAt: new Date,
		}
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
