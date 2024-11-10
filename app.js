const express = require('express')

const app = express()

/* --- Let's create two routes --- */

app.get('/', (req, res) => {
  res.send('<h1>WELCOME TO THE HOMEPAGE!</h1>')
})

app.get('/about', (req, res) => {
  res.send('<h1>ABOUT REST API</h1>')
})

app.listen(5000, () => {
  console.log('Server is running on port 5000')
})
