'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
		// define association here
		this.belongsTo(models.Sport, { foreignKey: 'sportId' })

		// singluar of the functions
		// get<className> - getSport
		// create<className> - createSport
		// add<className> - addSport
		// set<className> - setSport

		this.hasMany(models.Player, { foreignKey: 'currentTeamId', as: 'TeamRoster' })
		
		// singluar and plural of the functions
		// get<className | superceded by alias> - getPlayer
		// create<className> - createPlayer
		// add<className> - addPlayer
		// set<className> - setPlayer
    }
  }
  Team.init({
    name: {
      type: DataTypes.STRING,
    },
    homeCity: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};
