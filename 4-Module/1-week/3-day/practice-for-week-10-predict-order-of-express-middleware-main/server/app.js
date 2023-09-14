const express = require('express');
const app = express();

// First
// application middleware
app.use('/', (req, res, next) => {
  console.log('First');
  const error = new Error('First');
  next(error);
});

// Second
// application middleware
app.use((req, res, next) => {
  console.log('Second');
  next();
});

// Third
// router level middlewares
app.get('/other-resource', (req, res, next) => {
  console.log('Third');
  next();
}, (req, res, next) => {
  res.send('Message');
});

// Fourth
// middleware
const fourth = (req, res, next) => {
  console.log('Fourth');
  const error = new Error('Fourth');
  throw error;
};

// Fifth
// error handler middleware
const fifth = (err, req, res, next) => {
  console.log('Fifth');
  next();
};

// application level middleware
app.use('/', [fourth, fifth]);

// Sixth
// router level middleware
app.get('/other-resource', (req, res, next) => {
  console.log('Sixth');
  next();
});

// Seventh
// application level middleware
app.use((req, res, next) => {
  console.log('Seventh');
  res.send('Message');
});

// Eighth
// error handler middleware
app.use((err, req, res, next) => {
  console.log('Eighth');
  res.send('Message');
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
