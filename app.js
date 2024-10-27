const http = require('http')
const { readFileSync, read } = require('fs')

// get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')

const server = http.createServer((request, response) => {
  const url = request.url
  console.log(url)

  if (url === '/') {
    // Homepage
    response.writeHead(200, {
      'content-type': 'text/html'
    })
    response.write(homePage)
    response.end()
  }
  // Styles
  else if (url === '/styles.css') {
    response.writeHead(200, {
      'content-type': 'text/css'
    })
    response.write(homeStyles)
    response.end()
  }
  // Logo
  else if (url === '/logo.svg') {
    response.writeHead(200, {
      'content-type': 'image/svg+xml'
    })
    response.write(homeImage)
    response.end()
  }

  // About Page
  else if (url === '/about') {
    response.writeHead(200, {
      'content-type': 'text/html'
    })
    response.write('<h1>The About Page</h1>')
    response.end()
  }

  //   Error Page
  else {
    response.writeHead(404, {
      'content-type': 'text/html'
    })
    response.write('<h1>Page not Found!!</h1>')
    response.end()
  }
})

server.listen(5000)
