const http = require('http')

const server = http.createServer((request, response) => {
  const url = request.url
  console.log(url)

  if (url === '/') {
    // Homepage
    response.writeHead(200, {
      'content-type': 'text/html'
    })
    response.write('<h1>The Home Page</h1>')
    response.end()
  } else if (url === '/about') {
    // About Page
    response.writeHead(200, {
      'content-type': 'text/html'
    })
    response.write('<h1>The About Page</h1>')
    response.end()
  } else {
    response.writeHead(404, {
      'content-type': 'text/html'
    })
    response.write('<h1>Page not Found!!</h1>')
    response.end()
  }
})

server.listen(5000)
