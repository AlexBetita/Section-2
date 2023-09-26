const express = require('express')
const app = express()

const port = 3000

app.get("/hello", (req, res, next) => {
    console.log('1')
    next(err);
});

// 2:
app.use((err, req, res, next) => {
    console.log('2')
next(err);
});

// 3:
app.use((err, req, res, next) => {
return res.json('HELLO WORLD');
});

// 4:
app.use((req, res, next) => {
    console.log('3')
next();
});

app.listen(port, ()=> console.log('server is on'))