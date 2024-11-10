// Every file is a module in node by default
// Modules: Encapsulated code (only share minimum)

const { imran, rafia } = require('./2a.variables')
const greetFxn = require('./2b.utils')

greetFxn(imran)
greetFxn(rafia)
