const express = require('express')
const app = express()
require('dotenv').config()
const { Product, Category } = require('./db/models')

app.use(express.json())

// CRUD for Products
// full crud
app.get('/products', async (req, res) => {
	const products = await Product.findAll();
	res.json(products)
})

app.post('/products', async (req, res) => {
	const { name, price, stock } = req.body
	const product = await Product.create({
		name,
		price,
		stock
	})
	// const product = await Product.create(req.body)
	res.json(product)
})

app.put('/products/:id', async (req, res) => {
	const { id } = req.params;
	const updatedProduct = await Product.update(req.body, { where: { id: id } })
	res.json(req.body)
})

app.delete('/products/:id', async (req, res) => {
	const { id } = req.params;
	await Product.destroy({ where: { id: id } })
	res.json({'message': `Successfully deleted product with id of ${id}`})
})

app.get('/products/:id/discount', async (req, res) => {
	const { id } = req.params;

	const product = await Product.findByPk(id);

	const discountPrice = product.getDiscountPrice(0.20)

	res.json({
		originalPrice: product.price,
		discountPrice
	})
})

const port = process.env.PORT
app.listen(port, () => {
	console.log(`Server is now listening port ${port}`)
})
