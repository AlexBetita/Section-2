const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

app.use((req, res, next) => {
	const newError = new Error("Sorry, the requested resource couldn't be found")
	newError.statusCode = 404
	next(newError)
})

app.use((err, req, res, next) => {
	const newErrorObject = {
		"message": err.message,
		"statusCode": err.statusCode ? err.statusCode : 500
	}
	res.json(newErrorObject)
})


const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
