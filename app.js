const express = require('express')
const app = express()

const { products } = require('./data')

app.get('/', (req, res) => {
  res.send(`<div>
                    <h1>Home Page</h1>
                    <a href="/api/products">Products</a>
        </div>`)
})

app.get('/api/products', (req, res) => {
  const newProducts = products.map(({ id, name, image }) => {
    return { id, name, image }
  })

  res.json(newProducts)
  //   res.send('products')
})

app.listen(5000, () => {
  console.log('listening on port 5000')
})
