// Every file is a module in node by default
// Modules: Encapsulated code (only share minimum)

const names = require('./2a.variables')
const greetFxn = require('./2b.utils')

greetFxn(names.imran)
