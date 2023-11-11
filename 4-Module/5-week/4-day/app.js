const express = require('express')
const app = express()
require('dotenv').config()
// const {User, Post } = require('./db/models')
const { User } = require('./models')
const { sequelize } = require('./models')

app.use(express.json())

app.get('/users', async (req, res) => {
	const users = await User.findAll()

	res.json(users)
})

// unmanaged transaction
// more control for each transaction
app.post('/users/unmanaged', async (req, res) => {
	const t = await sequelize.transaction()

	try {
		const user1 = await User.create({
			username: 'John',
			email: '123@gmail.com'
		}, {transaction: t})

		const user2 = await User.create({
			username: 'Demo',
			email: 'demo@gmail.com'
		}, { transaction: t })

		const user3 = await User.create({
			username: 'D',
			email: 'd@gmail.com'
		}, { transaction: t })

		await t.commit();
		res.json({ 'message': 'successful' })
	} catch (err) {
		await t.rollback();
		res.json({ 'message': 'failed' })
	}

})

// managed tranasaction
// automatically does the process
app.post('/users/managed', async (req, res) => {

	try {
		const t = await sequelize.transaction(async (transact) => {
			await User.create({
				username: 'John',
				email: '123@gmail.com'
			}, { transaction: transact })

			await User.create({
				username: 'Demo',
				email: 'demo@gmail.com'
			}, { transaction: transact })

			await User.create({
				username: 'Demo-2',
				email: 'demo2@gmail.com'
			}, { transaction: transact })
		})

		res.json({ 'message': 'successful' })
	} catch (err) {
		res.json({ 'message': 'failed' })
	}

})

const port = process.env.PORT
app.listen(port, () => {
	console.log(`Server is now listening port ${port}`)
})
