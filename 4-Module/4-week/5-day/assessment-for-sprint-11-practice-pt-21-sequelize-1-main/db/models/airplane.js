'use strict';
const {
  Model
} = require('sequelize');
const { inService, currentNumPassengers } = require('../../test/data/airplane-values');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init({
	  airlineCode: {
		  allowNull: false,
		  type: DataTypes.STRING,
		  validate: {
			  len: [2, 2],
			  isAlpha: true,
			  isUppercase: true
		  }

	  },
	  flightNumber: {
		  allowNull: false,
		  type: DataTypes.STRING,
		  validate: {
			  len: [1, 4],
			  isNumeric: true
		  }
	  }
	  ,
	  inService: {
		  allowNull: false,
		  type: DataTypes.BOOLEAN,
		  defaultValue: true
	  },
	  maxNumPassengers: {
		  type: DataTypes.INTEGER,
		  allowNull: false,
		  validate: {
			  max: 999,
			  min: 2
		  },
		  isAlpha: true
	  },
	  currentNumPassengers: {
		  type: DataTypes.INTEGER,
		  validate: {
			  isAlpha: true,
			  max: 853,
			  min: 0,
			  isGreaterThanMaxNumPassengers() {
				  if (this.currentNumPassengers > this.maxNumPassengers) {
					  throw new Error('Current Passengers cannot greater than Maximum Number of Passengers')
				  }
			  },
			  ifInServiceIsFalse() {
				  if (!this.inService && this.currentNumPassengers >= 0) {
					  this.currentNumPassengers = null
					  throw new Error('Cannot have passengers when inService is false')
				  }
			  }
		  }
	  },
	  firstFlightDate: {
		  type: DataTypes.DATE,
		  validate: {
			  isAfter: '2019-12-31',
			  isBefore: '2022-01-01'
		  }
	  }
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};
