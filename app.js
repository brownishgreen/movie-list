const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Express app for movies')
})

app.listen( port, (req, res) => {
  console.log(`this app is running on http://localhost:${port}`)
})