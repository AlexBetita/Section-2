const express = require('express')
const app = express()
require('dotenv').config()

const sqlite3 = require('sqlite3')

const db = new sqlite3.Database(
    process.env.DATABASE,
    sqlite3.OPEN_READWRITE
)

app.use(express.json())

// CRUD

// read
// get all employees
app.get('/employees', (req, res)=>{
    const sql = `SELECT * FROM employees;`
    const params = []
    // records
    db.all(sql, params, (err, rows)=>{
        if(err){
            console.log(err)
        } else {
            res.json(rows)
        }
    })
})

app.post('/employees', (req, res)=>{
    const {firstName, lastName, email, age, position, salary} = req.body

    const sql = `INSERT INTO employees (FirstName, LastName, Email, Age, Position, Salary, DateJoined)
                 VALUES (?, ?, ?, ?, ?, ?, ${Date.now()})
                `
    const params = [firstName, lastName, email, age, position, salary]

    db.run(sql, params, (err)=>{
        if(err){
            console.log(err)
        } else {
            res.json({"Message": "Successfully created a new Employee"})
        }
    })
})

app.patch('/employees/:id', (req, res)=>{
    const {id} = req.params
    const {salary} = req.body

    const sql = `UPDATE employees
                 SET salary = (?)
                 WHERE id = ${id};
                `
    const params = [salary]

    db.run(sql, params, (err)=>{
        if(err){
            console.log(err)
        } else {
            res.json({"Message": `Successfully updated an Employee with the id of ${id}`})
        }
    })
})

app.delete('/employees/:id', (req, res)=>{
    const {id} = req.params

    const sql = `DELETE FROM employees
                 WHERE id = ${id};
                `
    const params = []

    db.run(sql, params, (err)=>{
        if(err){
            console.log(err)
        } else {
            res.json({"Message": `Successfully deleted an Employee with the id of ${id}`})
        }
    })
})

const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`Server is now listening on to port ${port}`)
})