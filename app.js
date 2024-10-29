const express = require('express')
const app = express()

const { products } = require('./data')

app.get('/', (req, res) => {
  res.send(`<div>
                    <h1>Home Page</h1>
                    <a href="/api/products">Products</a>
        </div>`)
})

/*--
app.get('/api/products', (req, res) => {
  const newProducts = products.map(({ id, name, image }) => {
    return { id, name, image }
  })

  res.json(newProducts)
  //   res.send('products')
})
  --*/

/** --- Route Parameters for Dynamism --- */
app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params

  const currentProduct = products.find(product => product.id === productID)

  currentProduct
    ? res.json(currentProduct)
    : res.send(`<h1>This product ${productID} does not exist</h1>`)
})

/** --- Query String Parameter for filtering etc --- */

app.get('/api/v1/search', (req, res) => {
  const { name, age } = req.query
  res.send(`<p>User details: Name is ${name} & Age is ${age}</p>`)
})

app.get('/api/v1/products', (req, res) => {
  const { search, limit } = req.query

  const updatedProducts = [...products]

  if (search) {
    const filteredProducts = updatedProducts.filter(product => product.name.startsWith(search))
    res.status(200).json(filteredProducts)
  }

  if (limit) {
    const limitedItems = updatedProducts.slice(0, Number(limit))
    res.status(200).json(limitedItems)
  }

  return res.status(200).json(updatedProducts)
})

app.listen(5000, () => {
  console.log('listening on port 5000')
})
