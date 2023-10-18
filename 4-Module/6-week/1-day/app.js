const bcrypt = require('bcrypt')

// const saltRounds = 2
// se#cret*Password
// seAcryetPassword

const saltRounds = 10
// @se13cr%e8t9P#asjkswlo$rd

const plainTextPassword = 'secretPassword'

let hashedPassword = ''

hashedPassword = bcrypt.hashSync(plainTextPassword, saltRounds)

// console.log(hashedPassword)

let result = bcrypt.compareSync(plainTextPassword, hashedPassword)

console.log(result)
