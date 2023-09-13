const express = require('express')
const data = require('./data.json')

const app = express()

const port = 3000

app.use(express.json()) // your endpoints are now able to parse json data

// methods
// get, post, delete, patch/put
app.get('/', (req, res) => {
	res.json('Hello World')
}) // middleware endpoint

app.post('/', (req, res) => {
	console.log(req.body)
	res.json('Done')
})

app.get('/pokemons', (req, res) => {
	res.json(data.pokemons)
})

// :
app.get('/pokemons/:id', (req, res) => {
	// console.log(req.params)
	const pokemonId = parseInt(req.params.id)
	const pokemon = data.pokemons.find(p => p.id === pokemonId)

	res.json(pokemon)
})

app.listen(port, () => console.log(`Server is listening on to port ${port}`))
