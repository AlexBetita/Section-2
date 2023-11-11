const express = require('express')
const data = require('./data.json')

const app = express()

const port = 3000

app.use(express.json()) // allows express to parse json objects
// middlewares that take in a req, res or a next

// endpoint
// method, url, req, res
app.get('/', (req, res) => {
	res.json("Hey! Welcome to my page!")
})

app.post('/', (req, res) => {
	console.log(req.body)
	res.send('Hello World!')
})

app.get('/pokemons', (req, res) => {
	res.json(data.pokemons)
})

app.get('/pokemons/:id', (req, res) => {
	// console.log(req.params.id)
	const pokemonId = parseInt(req.params.id)
	const pokemon = data.pokemons.find(pokemon => pokemon.id === pokemonId)

	res.json(pokemon)
})

// app.post()
// app.delete()
// app.patch()
// app.put()

app.listen(port, ()=> console.log(`Server is now listening to port ${port}`))
