'use strict';
const { Product } = require('../models')

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
	await Product.bulkCreate([{
		name: 'Product 1',
		price: 10.00,
		stock: 100
	}, {
		name: 'Product 2',
		price: 20.00,
		stock: 200
	}])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
	  await queryInterface.bulkDelete('Products', null, {})
  }
};
