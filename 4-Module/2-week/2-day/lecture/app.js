const express = require('express')
const app = express()

require('dotenv').config();

const sqlite3 = require('sqlite3')

const db = new sqlite3.Database(
    process.env.DATABASE,
    // permissions
    sqlite3.OPEN_READWRITE
)

app.use(express.json())

// get all employees
app.get('/employees', (req, res)=> {
    const sql = 'SELECT * FROM employees;'
    const params = []
    // rows are records
    db.all(sql, params, (err, rows) => {
        res.json(rows)
    })
})


app.post('/employees', (req, res, next)=>{
    const { firstName, lastName, email, age, position, salary } = req.body;

    const sql = `INSERT INTO employees (FirstName, LastName, Email, Age, Position, Salary, DateJoined)
                 VALUES (?, ?, ?, ?, ?, ?, ${Date.now()})
                `
    const params = [firstName, lastName, email, age, position, salary]

    db.run(sql, params, (err)=>{
        if(err){
            // next(err)
            console.log(err)
        } else {
            res.json({
                "Message": "Successfully added new Employee"
            })
        }
    })
})

app.put('/employees/:id', (req, res, next)=>{
    const { id } = req.params
    const { firstName } = req.body;

    const sql = `UPDATE employees
                 SET FirstName = (?)
                 WHERE id = ${id};
                `
    const params = [firstName]

    db.run(sql, params, (err)=>{
        if(err){
            // next(err)
            console.log(err)
        } else {
            res.json({
                "Message": "Successfully updated Employee"
            })
        }
    })
})

app.delete('/employees/:id', (req, res, next)=>{
    const { id } = req.params

    const sql = `DELETE FROM employees
                 WHERE id = ${id};
                `
    const params = []

    db.run(sql, params, (err)=>{
        if(err){
            // next(err)
            console.log(err)
        } else {
            res.json({
                "Message": "Successfully deleted Employee"
            })
        }
    })
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is now listening on port ${process.env.PORT}`)
})