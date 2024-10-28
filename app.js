const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('The Home Page')
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource not found!</h1>')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000')
})
