const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

// next: it will move on/invoke the next possible middleware

function isAuthenticated(req, res, next) {
	const {token} = req.headers
	if (!token) {
		res.json("PLEASE AUTHENTICATE USER")
	} else if (token === '1234') {
		next()
	}
	res.json('USER IS NOT AUTHENTICATED')
}

function isAuthorized(req, res, next) {
	const { isadmin } = req.headers
	if (!isadmin) {
		res.json("USER IS NOT AUTHORIZED")
	}
	next()
}


app.get('/users/reviews', [isAuthenticated, isAuthorized], (req, res) => {
	res.json("GET ALL USERS REVIEWS")
})

function validID(req, res, next) {
	if (Number(req.params.id)) {
		next()
	} else {
		throw new Error("NOT A VALID INTEGER")
	}
}

app.get('/users/:id', validID, (req, res) => {
	res.json("GET SPECIFIC USER")
})

app.get('/users', (req, res) => {
	res.json("GET ALL USERS")
})

// error handling middleware
// consists of 4 arguments
// err, req, res, next
app.use((err, req, res, next) => {
	res.statusCode = 404
	res.json(err.message)
})

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})
