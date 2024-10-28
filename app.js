const express = require('express')
const path = require('path')
const app = express()

// static setup & middleware
app.use(express.static('./public'))

/* ---

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

// We actually do not need to send static assest index.html exclusively, since it is a static asset, we simply also keep it in the public folder and life is sorted
--- */
app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource not found!</h1>')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000')
})
