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
  res.send(
    `<p>Searching products that start with : <strong>${search}</strong> & limit: <strong>${limit}</strong></p>`
  )
})

app.listen(5000, () => {
  console.log('listening on port 5000')
})
