const http = require('http')

const server = http.createServer((request, response) => {
  console.log('User hit the server')
  response.end('Home Page')
})

server.listen(5000)
