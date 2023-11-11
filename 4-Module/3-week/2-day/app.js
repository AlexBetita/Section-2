const express = require('express')
const app = express()
require('dotenv').config()
const sqlite3 = require('sqlite3')
const db = new sqlite3.Database(
    process.env.DATABASE_FILE,
    sqlite3.OPEN_READWRITE
)

app.use(express.json())

const port = process.env.PORT

app.get('/employees', (req, res)=>{
    const sql = `SELECT * FROM employees;`
    const params = []

    // sqlite3 database methods
    // db.get -> returns the first record found from the query results in memory
    // db.run -> just runs the queries
    // db.all -> all gets all the records and stores them in memory from the query results

    // write some sort of for loop to get every single record
    //
    // effecient
    // JOIN or a SUB QUERY
    //
    // inefficent
    // n + 1 query
    // SELECT * FROM employees WHERE id = 1;
    // SELECT * FROM employees WHERE id = 2;

    db.all(sql, params, (err, records)=>{
        if(err){
            console.log(err)
        } else {
            res.json(records)
        }
    })
})

// sql injection
app.post('/employees', (req, res)=>{
    const {data} = req.body
    const sql = `INSERT INTO Employees VALUES ${data}`
    const params = []

    db.run(sql, params, (err)=>{
        if(err){
            console.log(err)
        } else {
            res.json(`Successfully ran this query ${sql}`)
        }
    })
})

app.listen(port, ()=> console.log(`Server is listening on port ${port}`))