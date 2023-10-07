'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Airplanes', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			airlineCode: {
				type: Sequelize.STRING,
				allowNull: false,
				len: [2,2],
				isAlpha: true,
				isUppercase: true
			},
			flightNumber: {
				type: Sequelize.STRING,
				allowNull: false,
				len: [1,4],
				isNumeric: true
			},
			inService: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: true
			},
			maxNumPassengers: {
				type: Sequelize.INTEGER,
				allowNull: false,
				max: 999,
				min: 2,
				isAlpha: true
			},
			currentNumPassengers: {
				type: Sequelize.INTEGER,
				max: 853,
				min: 0,
				isAlpha: true
      },
      firstFlightDate: {
		  type: Sequelize.DATE,
		  isAfter: '2019-12-31',
		  isBefore: '2022-01-01'
      },
      createdAt: {
        allowNull: false,
		  type: Sequelize.DATE,
		  defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
		  type: Sequelize.DATE,
		  defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
		}

		});
		// await queryInterface.addConstraint('Airplanes', {
		// 	fields: ['airlineCode', 'flightNumber'],
		// 	type: 'unique'
		// });

		await queryInterface.addIndex('Airplanes', ['airlineCode', 'flightNumber'], {
			name: 'airline_and_flight_idx',
			unique: true
		});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Airplanes');
  }
};
