'use strict';
const { Order } = require('../models');
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
		await Order.bulkCreate([
			{ amount: 100, price: 10},
			{ amount: 200, price: 20},
			{ amount: 300, price: 30},
			{ amount: 400, price: 40},
			{ amount: 500, price: 50},
		])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
