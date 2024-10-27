const http = require('http')

const server = http.createServer((request, response) => {
  const url = request.url
  console.log(url)
  response.writeHead(200, {
    'content-type': 'text/html'
  })
  response.write('<h1>Dear Browser, render me as HTML5</h1>')
  response.end()
})

server.listen(5000)
