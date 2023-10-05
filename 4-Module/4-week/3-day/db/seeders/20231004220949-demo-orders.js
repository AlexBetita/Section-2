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
			{ amount: 100, price: 10}, // apple
			{ amount: 200, price: 20}, // apple
			{ amount: 300, price: 30}, // oranges
			{ amount: 400, price: 40}, // oranges
			{ amount: 500, price: 50}, // pears
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
