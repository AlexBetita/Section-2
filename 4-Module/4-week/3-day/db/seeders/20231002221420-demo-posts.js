'use strict';
const { Post } = require('../models');
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
		await Post.bulkCreate([
			{ title: 'Post 1', content: 'Content 1', userId: 1 },
			{ title: 'Post 2', content: 'Content 2', userId: 1 },
			{ title: 'Post 3', content: 'Content 3', userId: 2 },
			{ title: 'Post 4', content: 'Content 4', userId: 2 },
			{ title: 'Post 5', content: 'Content 5', userId: 3 },
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
