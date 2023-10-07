const express = require('express');
const router = express.Router();
const { Team, Player, Sport } = require('../db/models')


router.post('/:id/players', async (req, res) => {
	const currentTeam = await Team.findByPk(req.params.id)

	// before alias
	// const newPlayer = await currentTeam.createPlayer(req.body)

	// after alias
	const newPlayer = await currentTeam.createTeamRoster(req.body)

	res.json(newPlayer)
})

router.get('/:id', async (req, res) => {
	const {id} = req.params
	const teams = await Team.findAll({
		where: {
			id: id
		},
		include: [
			{ model: Player, as: "TeamRoster" }, Sport
		]
	})

	res.json(teams)
})


module.exports = router;
