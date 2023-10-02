'use strict';
const { Category } = require('../models')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
	await Category.bulkCreate([{
		name: 'Category 1',
		description: 'Description 1'
	}, {
		name: 'Category 2',
		description: 'Description 2'
	}])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
	await queryInterface.bulkDelete('Category', null, {})
  }
};
