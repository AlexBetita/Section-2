require('express-async-errors');
require('dotenv').config();
const { WarehouseItem } = require('./db/models')
const express = require('express');
const app = express();

app.use(express.json());


app.get('/items', async (req, res) => {
	const items = await WarehouseItem.findAll({
		where: {
			isUsed: false
		}
	})

	res.json(items)
})

app.put('/items/:id', async (req, res) => {
	const { id } = req.params
	const currentWarehouseItem = await WarehouseItem.findByPk(id)

	const updatedWarehouseItem = await currentWarehouseItem.update(req.body)

	res.json(updatedWarehouseItem)
})

if (require.main === module) {
  const port = 8003;
  app.listen(port, () => console.log('Server-3 is listening on port', port));
} else {
  module.exports = app;
}
