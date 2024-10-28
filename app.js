const express = require('express')

// Right away we get the server!
const app = express()

app.get('/', (req, res) => {
  console.log('Home Page')
  res.send('Home Page')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000')
})
