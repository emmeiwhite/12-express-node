const express = require('express')

// Right away we get the server!
const app = express()

app.listen(5000, () => {
  console.log('app is listening!!!')
})
