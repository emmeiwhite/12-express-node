const express = require('express')
const http = require('http')

// const app = express()

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200)
    res.write('<h1>Homepage !!!</h1>')
    res.end()
  }
})

server.listen(5000, () => {
  console.log('App is listening on port 5000')
})
// app.listen(5000, () => {
//   console.log('App is listening on port 5000')
// })
