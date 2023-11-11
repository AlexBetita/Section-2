'use strict';

const { Superhero } = require('../models');

// DON'T SPEND ALL YOUR TIME MAKING REAL SEED DATA!!!
// Try to just spend only 5 minutes to create the seed data for testing
// You do not need to put in real superhero data as values! The data values
  // just need to make sense based from the migration and model files.

const validSuperheros = [
	{
		name: 'Batman',
		alias: 'Bruce',
		affilation: 'Justice League',
		heightCm: 181,
		isMutant: false,
		race: "human",
		universe: "DC",
		releaseYear: 2021
	},
	{
		name: 'Thor',
		alias: 'God of thunder',
		affilation: 'Avengers',
		heightCm: 185,
		isMutant: false,
		race: "human",
		universe: "Marvel",
		releaseYear: 1939
	},
	{
		name: 'Tony Stark',
		alias: 'Ironman',
		affilation: 'Avengers',
		heightCm: 178,
		isMutant: false,
		race: "human",
		universe: "Marvel",
		releaseYear: 1940
	},
	{
		name: 'Logan',
		alias: 'Wolverine',
		affilation: 'X-Men',
		heightCm: 164,
		isMutant: true,
		race: "human",
		universe: "Marvel",
		releaseYear: 1941
	},
	{
		name: 'Barry',
		alias: 'The flash',
		affilation: 'Justice League',
		heightCm: 181,
		isMutant: false,
		race: "human",
		universe: "DC",
		releaseYear: 2020
	},
];

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await Superhero.bulkCreate(validSuperheros, {
        validate: true,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    for (let superheroInfo of validSuperheros) {
      try {
        await Superhero.destroy({
          where: superheroInfo
        });
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  },
  // DO NOT MODIFY BELOW (for testing purposes):
  validSuperheros,
};
