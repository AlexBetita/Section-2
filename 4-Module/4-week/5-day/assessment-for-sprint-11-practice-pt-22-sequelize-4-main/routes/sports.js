const express = require('express');
const router = express.Router();
const { Sport } = require('../db/models')

router.get('/', async (req, res) => {
	const sports = await Sport.findAll({
		orderBy: {
			name: 'DSC'
		}
	})

	res.json(sports)
})

module.exports = router;
