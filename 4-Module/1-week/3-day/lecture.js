const express = require('express')
const app = express()
const port = 3000

// application level
app.use(express.json())
// app.use((req, res, next) => {

// })


// middlewares
// router level middleware
// app.get('url', (req, res, next)=> {})

app.get('/error', (req, res) => {

	try {

	} catch {
		throw new Error('SOMETHING BAD HAPPEND')
	}

})

app.get('users/:id/reviews', (req, res) => {
	res.json('RETURN ONE USERS REVIEWS')
})

app.get('/users/:id', (req, res) => {
	res.json('RETURN ONE USER BASED ON ID')
})

app.get('/users', [isAuthenticated, isAuthorized],  (req, res) => {
	res.json('RETURN ALL USERS')
})

app.post('/users', firstNameValidator, (req, res) => {
	res.json("SUCCESSFULLY CREATED USER")
})

// error handling middlewares
// err, req, res, next
app.use((err, req, res, next) => {
	// next()
	throw new Error("ERRORRRRR")
})

app.get('/error', (req, res) => {
	res.json('TRIGGERED SECOND ERROR ENDPOINT')
})

// error handling middlewares
// err, req, res, next
app.use((err, req, res, next) => {
	console.log(err)
	res.json("AN ERROR OCCURED")
})


function firstNameValidator(req, res, next) {
	const { firstName } = req.body

	if (!firstName) res.json('FIRST NAME REQUIRED')
	console.log(firstName)
	if (firstName.toUpperCase()[0] + firstName.slice(1, firstName.length) === firstName) next()

	res.json('FIRST NAME IS NOT UPPERCASE')
}


function isAuthenticated(req, res, next) {
	const { token } = req.headers
	if (token && token == '1234') {
		next()
	}
	res.json('NOT AUTHENTICATED')
}

function isAuthorized(req, res, next) {
	console.log(req.headers)
	const { isadmin } = req.headers
	if (isadmin) {
		next()
	}
	res.json('NOT AUTHORIZED')
}

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
