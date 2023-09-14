const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

app.use((req, res, next) => {
	res.statusCode = 404
	const newErr = new Error("Sorry, the requested resource couldn't be found.")
	next(newErr)
})

// catch all error handler
app.use((err, req, res, next) => {
	const newErrObj = {
		"message": err.message,
		"statusCode": 500,
		"description": [
			{ "firstName": "must be a minimum of 2 characters" }
		]
	}

	if (res.statusCode === 404) {
		newErrObj.statusCode = res.statusCode
	}
	res.json(newErrObj)
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
